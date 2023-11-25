<?php

    // Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje HTML
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Kontroluje data popř. přesměruje na chybovou adresu
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://www.marcelvana.com/index.html?success=-1#form");
        exit;
    }

    $recipient = "marcelvana@seznam.cz";

    // předmět
    $subject = "Zpráva přes kontaktní formulář: $name";

    // Obsah emailu
    $email_content = "Jméno: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Zpráva:\n$message\n";

    // Hlavička
    $email_headers = "From: $name <$email>";

    // Odeslání emailu
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Přesměrování na stránku, pokud vše proběhlo v pořádku
    header("Location:https://www.marcelvana.com/index.html?success=1#form");

?>
