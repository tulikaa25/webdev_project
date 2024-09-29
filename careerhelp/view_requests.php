<?php
// Start the session (if not already started)
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname ="counselling";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch requests from the database
$sql = "SELECT id, first_name, last_name, phone, email, city, state, request_time, call_status FROM callback_requests ORDER BY request_time ASC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Callback Requests</title>
</head>
<body>
    <h2>Callback Requests</h2>

    <table border="1">
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Request Time</th>
            <th>Call Status</th>
            <th>Action</th>
        </tr>

        <?php
        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["first_name"] . "</td>";
                echo "<td>" . $row["last_name"] . "</td>";
                echo "<td>" . $row["phone"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td>" . $row["city"] . "</td>";
                echo "<td>" . $row["state"] . "</td>";
                echo "<td>" . $row["request_time"] . "</td>";
                echo "<td>" . $row["call_status"] . "</td>";
                echo "<td><a href='mark_called.php?id=" . $row["id"] . "'>Mark as Called</a></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='10'>No callback requests found.</td></tr>";
        }

        $conn->close();
        ?>
    </table>

    <a href="index.php">Go to Home Page</a>
</body>
</html>
