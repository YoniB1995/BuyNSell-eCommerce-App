import React, { useEffect,useRef} from 'react'

const Paypal = ({cartItems}) => {
    const paypal = useRef();
   
const userProducts = cartItems?.map((item) => 
           [{description: item.name,
            amount:{
               currency_code:"CAD",
               value:item.price
           }}
    ]) || null
          
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: userProducts,
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

    return (
        <>
            <div ref={paypal}></div>
        </>
    )
}

export default Paypal
