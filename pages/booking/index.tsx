import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

export default function BookingPage(){
    const bookingDetails= {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNight: 3,
        startDate:"24 August 2025"

    };
    return(
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-2 gap-6">
                <BookingForm/>
                <OrderSummary bookingDetails={bookingDetails}/>
            </div>
        </div>
    )
}