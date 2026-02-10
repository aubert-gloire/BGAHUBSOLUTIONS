# Email Setup Instructions

Your contact form is now configured to send emails to **aubertgloire@gmail.com**.

## Quick Setup (2 minutes)

### Option 1: Using Resend (Recommended - Free tier available)

1. **Sign up for Resend** (free tier includes 100 emails/day)
   - Go to https://resend.com/signup
   - Sign up with your email or GitHub

2. **Get your API Key**
   - After signing in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy your API key (starts with `re_`)

3. **Add API Key to your project**
   - Open the `.env.local` file in your project root
   - Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```

4. **Restart your dev server**
   - Stop the current server (Ctrl+C in terminal)
   - Run: `npm run dev`

5. **Test it!**
   - Fill out the contact form on your website
   - Check aubertgloire@gmail.com for the email

### Option 2: Using Gmail SMTP (Alternative)

If you prefer to use Gmail directly, I can set that up instead. Let me know!

## What Happens Now?

When someone fills out the contact form:
1. ✉️ A beautifully formatted email is sent to **aubertgloire@gmail.com**
2. 📋 The email includes:
   - Client's name
   - Client's email (so you can reply)
   - Phone number
   - Service they're interested in
   - Their message
   - Timestamp

## Temporary Behavior

Until you add the API key:
- Form submissions are logged to the console
- Users see a success message
- No actual email is sent (but everything else works)

## Need Help?

If you have any issues:
1. Check that `.env.local` has your API key
2. Make sure you restarted the dev server
3. Check the terminal for any error messages
4. Email verification might be needed for custom domains

---

**Current Email Recipient:** aubertgloire@gmail.com  
**Form Location:** Contact Us section on homepage  
**API Endpoint:** /api/contact
