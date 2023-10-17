import React from 'react';
import { useBookCartProps } from '../../contexts/context';
import OrderItem from './orderItem';
import EmptyCart from './emptyCart';
import CartHeader from './cartHeader';

export function CartPreview({ isVisible, onCartCloseClick, items }) {

    const calculateDiscountedPrice = (item) => {
        return item.price * (100 - item.discount) / 100;
    };

    const discountedPrice = items.reduce((total, item) => {
        return total + calculateDiscountedPrice(item);
    }, 0);

    const visibilityClass = isVisible ? "block" : "hidden";

    const renderCartItem = (item) => {
        return (
            <OrderItem
                key={item.id}
                book={item}
                calculateDiscountedPrice={calculateDiscountedPrice}
            />
        );
    };

    return (
        <div className={`fixed top-16 right-0 bg-gray-200 w-1/4 opacity-95 z-10 ${visibilityClass}`}>
            <div className="flex flex-col">
                <CartHeader onCloseClick={onCartCloseClick} />
                {items.length > 0 ? (
                    <>
                        <div className="flex flex-wrap flex-col mb-6">
                            {items.map(renderCartItem)}
                        </div>
                        <div className='font-bold text-2xl flex mb-4 ml-6 w-full flex-wrap'>
                            <span className='w-70'>
                                Subtotal ({items.length} item{items.length !== 1 ? 's' : ''}) : ₹{discountedPrice}
                            </span>
                        </div>
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </div>
    );
}