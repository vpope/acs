module.exports.email = {
  templateDir: 'views',
  testMode: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  contactEmail: process.env.CONTACT_EMAIL || 'vpope.developer@gmail.com'
};
