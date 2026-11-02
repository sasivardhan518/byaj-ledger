# Finish setting up Google sign-in

The page is hosted at https://sasivardhan518.github.io/byaj-ledger/ and your client ID is already in `config.js`. Only the Google settings are left.

The repository holds only the page code and the client ID. Your financial data is never in it.

## 1. Tell Google the address

In https://console.cloud.google.com, with the project that owns your client ID selected:

1. **APIs & Services > Library**: search for **Google Drive API** and select **Enable**.
2. **APIs & Services > Credentials**: open your OAuth client ID. It must be type **Web application**. Under **Authorised JavaScript origins**, add `https://sasivardhan518.github.io` with no folder and no trailing slash. Save. This can take a few minutes to apply.
3. **OAuth consent screen**: add the scope `https://www.googleapis.com/auth/drive.appdata` under **Data access**, and add your Gmail address under **Audience > Test users**.

Google shows an "app isn't verified" warning while the app is in testing. Since this is your own app, select **Advanced** and continue.

## 2. Move your existing data

Your browser keeps data separately for each web address, so it won't appear at the new address by itself.

1. In the copy you have been using, open **Settings > Your data > Copy my data**.
2. At the new address, paste it into the same box and select **Restore from this text**, then confirm.
3. Select **Sign in with Google**. Your data then saves to Drive.

## If sign-in fails

- **Error 400 redirect_uri_mismatch or origin_mismatch**: the origin in step 1.2 doesn't exactly match the page's address.
- **Error 403 access_denied**: add your email as a test user.
- **Drive permission message**: tick the Drive permission on Google's sign-in screen.
- **"Could not save" with a 403 from Google**: check the Google Drive API is enabled.

## After changing the page

Edit `interest-calculator.html` and push to `main`. GitHub Actions builds and deploys it automatically.
