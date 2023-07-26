# SMS Forwarder Server

## Usage

1. Make sure to install [Deno](https://deno.land/manual/getting_started/installation)
2. Configure `.env` according to `.env.example`
3. Run `deno task start`

## Client

### Android

1. Install [SMS Forwarder](https://play.google.com/store/apps/details?id=com.frzinapps.smsforward)

2. Add a new filter to forward SMS

3. The recipient's type should be "URL", and the value is `${YOUR_DEPLOYMENT_URL}/api/messages`. The method should be `POST`, and the key should be the same as `SENDER_KEY` in `.env`

4. (Optional) Use the following message template:

   ```
   From: %pni%
   To: %sn%
   At: %Y/%M/%d %H:%m
   
   %mb%
   ```

### iOS

You can use Shortcuts with its Automation to achieve similar results.
