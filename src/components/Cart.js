import React,{Component} from "react";
import { ProductConsumer } from "../context";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import Title from "./Title";

class Cart extends Component{
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length >0){
                            return (
                                <>
                                    <Title name="your" title="cart"/>
                                    <CartColumn />
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                    
                                </>
                            )
                        }else{
                            return <EmptyCart />
                        }
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}
export default Cart;