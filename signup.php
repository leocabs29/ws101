<?php

    $name = $_POST['name'];
    $program = $_POST['program'];
    $campus = $_POST['campus'];
    $email = $_POST['email'];

    //database connection
    $conn = new mysqli('localhost', 'root', 'Hanaban28', 'signin');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        $wkwk = $conn->prepare("INSERT INTO signup (Name, Program, Campus, Email) VALUES (?, ?, ?, ?)");
        $wkwk->bind_param("ssss", $name, $program, $campus, $email);

        // execute the query
        if ($wkwk->execute()) {
            echo "<script>alert('Sign up Success');</script>";
            sleep(3);
            header("Location: index.html");
        } else {
            echo "Error: " . $wkwk->error;
        }

        $wkwk->close();
        $conn->close();
    }
?>