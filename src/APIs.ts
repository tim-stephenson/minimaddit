
export const api_urls = {
    "daily_treasury_bill_rates": "http://localhost:3000/treasury_bill_rates"
};

export type api_return_types = {
    daily_treasury_bill_rates : {
        ROUND_B1_YIELD_4WK_2: string;
        ROUND_B1_YIELD_8WK_2: string;
        ROUND_B1_YIELD_13WK_2: string;
        ROUND_B1_YIELD_26WK_2: string;
        ROUND_B1_YIELD_52WK_2: string;
        INDEX_DATE: string;
    };
};


