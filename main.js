document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const messageDiv = document.getElementById("message")
    try {
        const response = await fetch("https://api.newtimes.az/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if (response.ok) {
            const data = await response.json()
            messageDiv.textContent = "Login successful!"
            console.log("Login successful:", data)
        } else {
            const errorData = await response.json()
            messageDiv.textContent = `Login failed: ${errorData.message || response.statusText}`
            console.error("Login failed:", errorData)
        }
    } catch (error) {
        messageDiv.textContent = "An error occurred. Please try again."
        console.error("An error occurred:", error)
    }
})