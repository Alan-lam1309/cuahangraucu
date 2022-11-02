import style from './Cart.module.scss'

<?php
session_start();
$total = 0;
$quantity = 0;
if (isset($_POST["buy"])) {
    if (isset($_SESSION["cart"])) {
        $item_array_id = array_column($_SESSION["cart"], "VegetableID");
        if (!in_array($_GET["id"], $item_array_id)) {
            $count = count($_SESSION["cart"]);
            $item_array = array(
                'VegetableID' => $_GET["id"],
                'Price' => $_POST["hidden_price"],
                'VegetableName' => $_POST["hidden_name"],
                'Image' => $_POST["hidden_image"],
                'Unit' => $_POST["hidden_unit"],
                'Quantity' => 1
            );
            $_SESSION["cart"][$count] = $item_array;
        } else {
            foreach ($_SESSION["cart"] as $key => $item) {
                if ($item["VegetableID"] == $_GET["id"]) {
                    $_SESSION["cart"][$key]["Quantity"] = $item["Quantity"] + 1;
                }
            }
        }
    } else {
        $item_array = array(
            'VegetableID' => $_GET["id"],
            'Price' => $_POST["hidden_price"],
            'VegetableName' => $_POST["hidden_name"],
            'Image' => $_POST["hidden_image"],
            'Unit' => $_POST["hidden_unit"],
            'Quantity' => 1
        );
        $_SESSION["cart"][0] = $item_array;
    }
}

foreach ($_SESSION["cart"] as $key => $value) {
    $quantity += $value["Quantity"];
    $total += $value["Quantity"] * $value["Price"];
    $_SESSION["cart_total"] = $total;
}
?>
<html>

<head>
    <link rel="stylesheet" href="../css/boostrap.css" type="text/css">
    <link rel="stylesheet" href="../css/style.css" type="text/css">
</head>

<body>
    <?php include '../menu.php'; ?>
    <div class="container">
        <h4>Cart</h4>
        <table class="cart">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Price</th>
            </tr>
            <?php
            if (!empty($_SESSION["cart"])) {
                foreach ($_SESSION["cart"] as $key => $value) {
                    echo ' <tr>
                            <td>' . $key + 1 . '</td>
                            <td>' . $value["VegetableName"] . '</td>
                            <td>
                                <img class="product-image" alt="product-image" src="data:image/jpeg;base64,' . $value["Image"] . '" />
                            </td>
                            <td>' . number_format($value["Quantity"]) . '</td>
                            <td>' . $value["Unit"] . '</td>
                            <td>' . number_format($value["Price"]) . '</td>
                        </tr>';
                }
            }
            echo '<tr>
                <td colspan="3">Total</td>
                <td colspan="2">' . number_format($quantity) . '</td>
                <td>' . number_format($total) . '</td>
            </tr>'
            ?>

        </table>
        <?php
        if (!empty($_SESSION["cart"])) {
            echo '<form action="saveorder.php" method="POST">
                <button class="btn btn-danger">Order</button>
            </form>';
        }
        ?>
    </div>
</body>

</html>


export default Cart;