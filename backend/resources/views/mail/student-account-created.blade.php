<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Student account created</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;-webkit-font-smoothing:antialiased;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f4f5;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
                    <tr>
                        <td style="background-color:#ea580c;background:linear-gradient(135deg, #fdba74 0%, #f97316 42%, #ea580c 72%, #c2410c 100%);padding:28px 32px;text-align:center;">
                            <p style="margin:0;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.82);">Account created</p>
                            <p style="margin:8px 0 0;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-size:20px;font-weight:700;color:#ffffff;line-height:1.3;">{{ config('mail.from.name') }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:32px 32px 8px;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#18181b;">
                            <p style="margin:0 0 16px;">Hello <strong>{{ $studentName }}</strong>,</p>
                            <p style="margin:0 0 18px;color:#3f3f46;">Your student portal account has been created. Use the credentials below to log in.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:8px 32px 28px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;width:100%;">
                                <tr>
                                    <td style="background-color:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:18px 18px;font-family:Segoe UI,system-ui,-apple-system,sans-serif;color:#18181b;">
                                        <p style="margin:0 0 10px;font-size:12px;color:#78716c;">Login role</p>
                                        <p style="margin:0 0 14px;font-size:15px;font-weight:800;color:#111827;">Student</p>

                                        <p style="margin:0 0 10px;font-size:12px;color:#78716c;">Identifier (you can use either)</p>
                                        <p style="margin:0 0 8px;font-family:ui-monospace,Consolas,monospace;font-size:14px;font-weight:800;color:#c2410c;">Student # : {{ $studentNumber }}</p>
                                        <p style="margin:0 0 14px;font-family:ui-monospace,Consolas,monospace;font-size:14px;font-weight:800;color:#c2410c;">Email : {{ $email }}</p>

                                        <p style="margin:0 0 10px;font-size:12px;color:#78716c;">Temporary password</p>
                                        <p style="margin:0;font-family:ui-monospace,Consolas,monospace;font-size:20px;font-weight:900;letter-spacing:0.12em;color:#c2410c;">{{ $temporaryPassword }}</p>
                                        <p style="margin:10px 0 0;font-size:12px;color:#78716c;">Use this password for your first login. Change it after signing in.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0 32px 28px;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.55;color:#71717a;">
                            @if(!empty($portalUrl))
                                <p style="margin:0 0 12px;">
                                    Portal link:
                                    <a href="{{ $portalUrl }}" style="color:#c2410c;text-decoration:none;">{{ $portalUrl }}</a>
                                </p>
                            @endif
                            <p style="margin:0 0 12px;">
                                For security, please log in and change your password as soon as possible.
                            </p>
                            <p style="margin:0;border-top:1px solid #e4e4e7;padding-top:20px;font-size:12px;color:#a1a1aa;">This is an automated message. Please do not reply to this email.</p>
                        </td>
                    </tr>
                </table>
                <p style="margin:20px 0 0;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-size:11px;color:#a1a1aa;text-align:center;">&copy; {{ date('Y') }} {{ config('mail.from.name') }}</p>
            </td>
        </tr>
    </table>
</body>
</html>

