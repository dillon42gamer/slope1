document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "B"
    if (event.key === "b" || event.key === "B") {
        // Open a new blank tab
        var newTab = window.open("about:blank", "_blank");

        // Inject HTML content with an icon, title, and iframe
        newTab.document.write(`
            <html>
                <head>
                    <title>Clever | Portal</title>
                    <link rel="icon" href="clever.png" type="image/png">
                    <script>
                        document.addEventListener('keydown', function(event) {
                            // Handle "P" key press within the iframe context
                            if (event.key === 'p' || event.key === 'P') {
                                window.location.href = 'https://classroom.google.com'; // Make sure this is classroom.google.com IT IS
                            }
                        });
                    <\/script>
                </head>
                <body style="margin:0;">
                    <iframe src="index.html" style="border:none; width:100vw; height:100vh;"></iframe>
                </body>
            </html>
        `);

        // Focus on the new tab
        newTab.focus();

        // Redirect the current tab to Google Classroom
        window.location.href = "https://classroom.google.com";
    }
});
