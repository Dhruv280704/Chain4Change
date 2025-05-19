import axios from 'axios';

export const createPlisioInvoice = async (req, res) => {
  const { amount, currency, order_name, email } = req.body;

  const API_KEY = process.env.PLISIO_API_KEY;

  // 🔍 Log incoming request data
  console.log("===== Incoming Request to createPlisioInvoice =====");
  console.log("amount:", amount);
  console.log("currency:", currency);
  console.log("order_name:", order_name);
  console.log("email:", email);
  console.log("PLISIO_API_KEY (first 6 chars):", API_KEY?.slice(0, 6), '...');

  try {
    const invoicePayload = new URLSearchParams({
      api_key: String(PLISIO_API_KEY),
      amount: String(amount),
      currency: String(currency),
      order_name: String(order_name),
      order_number: 'INV-' + Date.now(),
      source_currency: 'BTC', // or 'auto' 
      email: String(email),
      callback_url: 'https://chain4-change.vercel.app/payment-callback',
      redirect_to_success: 'https://chain4-change.vercel.app/success',
      redirect_to_fail: 'https://chain4-change.vercel.app/failure'
    });

    console.log("🚀 Sending invoice creation request to Plisio...");

    const response = await axios.post(
  'https://plisio.net/api/v1/invoices', 
      invoicePayload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    console.log("✅ Plisio Response Data:", response.data);

    const invoiceUrl = response.data?.data?.invoice_url;
    if (!invoiceUrl) {
      console.warn("⚠️ Invoice URL not found in Plisio response");
    }

    res.json({ invoiceUrl });
  } catch (err) {
    console.error("❌ Plisio Error Data:", err.response?.data || null);
    console.error("❌ Plisio Error Message:", err.message);
    console.error("❌ Plisio Stack Trace:", err.stack);
    res.status(500).json({ error: err.response?.data?.message || 'Failed to create invoice' });
  }
};
