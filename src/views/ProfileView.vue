<template>
    <div class="container vh-100 profile-container">
        <div class="personal-info bg-white d-flex flex-column align-items-center py-5 gap-5">
            <!-- <img :src="user.profileImg" alt="Image of user"> -->
            <div class="image"></div>
            <div class="profile">
                <p>{{user.name}} {{user.lastname}}</p>
                <p>Age: {{user.age}}</p>
                <p>Gender: {{user.gender}}</p>
                <p>{{user.emailAddress}}</p>
                <p>{{user.phoneNumber}}</p>
            </div>
        </div>
        <div class="booking-info bg-white py-5 d-flex flex-column align-items-center gap-5">
            <h1>Booking</h1>
            <div class="booking-data">
                <div class="top d-flex justify-content-between px-4 align-items-center pt-3">
                    <p>{{booking.depature.place}} to {{booking.arrival.place}}</p>
                    <p>R{{booking.price}}</p>
                </div>
                <div class="middle d-flex flex-column align-items-start justify-content-center ps-4 pt-3" >
                    <p>Seat {{booking.seatNumber}}</p>
                    <p>Depature: {{booking.depature.date}} {{booking.depature.time}}</p>
                    <p>Arrival: {{booking.arrival.date}} {{booking.arrival.time}}</p>
                </div>
                <div class="bottom d-flex justify-content-end pe-4 align-items-center pt-3">
                    <p>Booking {{booking.bookingId}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                name: "Somikazi",
                lastname: "Ntonintshi",
                age: 21,
                gender: "Female",
                emailAddress: "email@gmail.com",
                phoneNumber: "0711234567",
                profileImg: "http://igndfdlskflskd"
            },
            booking: {
                bookingId: 67,
                depature: {
                    place: "KZN",
                    date: "29/11/2024",
                    time: "18:00"
                },
                arrival: {
                    place: "Cape Town",
                    date: "30/11/2024",
                    time: "14:00"
                },
                seatNumber: 26,
                price: 1200
            }
        }
    }
}
</script>

<style scoped>
    .personal-info {
        border-right: 1px solid rgb(194, 194, 194);
    }

    .profile-container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
    }

    .image {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        background: gray;
    }

    .booking-data {
        height: 300px;
        width: 500px;
        background: rgb(248, 248, 248);
        box-shadow: 0 0 10px 0 rgb(90, 90, 90);
        border: .5px solid gray;
        border-radius: 8px;

        display: grid;
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-columns: 1fr;
    }

    .top, .middle {
        border-bottom: .5px solid rgb(199, 199, 199);
    }
</style>