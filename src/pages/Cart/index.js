import style from './Cart.module.scss'

function Cart() {
    return ( 
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
    )
}


export default Cart;