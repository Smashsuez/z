export function html({ url, text, data }) {
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
                text-align: center;
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
            <h1>Email Verification</h1>
            <p>Click the button below to verify your email:</p>
            ${data ? `<p>${data}</p>` : ''}
            <p><a class="button" href="${url}">${text}</a></p>
        </div>
    </body>
    </html>
    `;
}
