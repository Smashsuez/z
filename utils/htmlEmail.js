export function html({ url, text, data, name, email, phone, state, businessName, page, product, orderNumber }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            /* Reset some default styles */
            body, p {
                margin: 0;
                padding: 0;
            }
            
            /* Container styles */
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                line-height: 2;
            }
            
            /* Button styles */
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            ${ url ? `
            <p>Hello,</p>
            <p>Thank you for signing up with ZAGEL. Please click the button below to verify your email address:</p>
            <p><a class="button" href="${url}">${text}</a></p>
            <p>If you didn't create an account with ZAGEL, you can safely ignore this email.</p>
            <br/>
            <p>Best regards,</p>
            <p>The ZAGEL Team</p>`
            : ""}
            ${ data ? `
                <div>Name: ${name}</div>
                <div>Email: ${email}</div>
                <div>Phone: ${phone}</div>
                <div>State: ${state}</div>
                <div>Business Name: ${businessName}</div>
                <div>Website / Facebook page: ${page}</div>
                <div>What Is/Are Product You Deliverd ${product}</div>
                <div>Estimated Number Of Orders Per Month?: ${orderNumber}</div>
                ` : ''}
        </div>
    </body>
    </html>
    `;
}
