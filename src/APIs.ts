
export const api_urls = {
    "daily_treasury_yield_curve": "http://localhost:3000/treasury_yield_curve"
};

export type api_return_types = {
    daily_treasury_yield_curve : {
        BC_1MONTH: string;
        BC_2MONTH: string;
        BC_3MONTH: string;
        BC_4MONTH: string;
        BC_6MONTH: string;

        BC_1YEAR: string;
        BC_2YEAR: string;
        BC_3YEAR: string;
        BC_5YEAR: string;
        BC_7YEAR: string;
        BC_10YEAR: string;
        BC_20YEAR: string;
        BC_30YEAR: string;
        updated: string;
    };
};


