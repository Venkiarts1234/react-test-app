import {useEffect, useState} from "react";

const CurrencyFormatter = ({ number, style='currency', currency, ...props }) => {
    const [currencyFormatter, setCurrencyFormatter] = useState(number);

    useEffect(() => {
        let formatter = new Intl.NumberFormat('en-US', {
            style: style,
            currency: currency,
        });
        setCurrencyFormatter( formatter.format(number));
    }, [number])


    return (
        <>
            { currencyFormatter }
        </>
    );
};

export default CurrencyFormatter;