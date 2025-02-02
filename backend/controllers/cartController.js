import userModel from "../models/userModel.js";


// add product to user cart
const addToCart = async (req, res) => {
    try {

        const { userId, itemsId, size } = req.body;
        console.log(userId, itemsId, size);

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if (cartData[itemsId]) {
            if (cartData[itemsId][size]) {
                cartData[itemsId][size] += 1;
            }
            else {
                cartData[itemsId][size] = 1;
            }
        }
        else {
            cartData[itemsId] = {};
            cartData[itemsId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Product added to cart" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Update user cart
const updateCart = async (req, res) => {
    try {

        const { userId, itemsId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemsId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Cart Updated" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// get user cart
const getUserCart = async (req, res) => {

    try {

        const { userId } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

export { addToCart, getUserCart, updateCart }