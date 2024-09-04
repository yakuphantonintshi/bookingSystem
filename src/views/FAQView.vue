<template>
    <div class="questions vh-90">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>

        <h3>Booking, rebooking and cancellation</h3>
        <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">How can I book my bus ticket?</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Can I make changes to my booking?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample2">Can I cancel my bus ticket?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample2">What happens if I miss my bus?</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Bus tickets can be booked through our online portal, whatsapp portal, at one of our branches or many other third-party agents like Computicket, Bus bud, Flightsite etc.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
            Yes. It is possible to make changes to your booking 3 hours prior to departure by contacting our customer care or one of our sales offices nationwide. There is 20% rebooking fee applicable and a price difference payable depending on the ticket class.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample3">
          <div class="card card-body">
            Yes. Tickets can be cancelled 6 hours prior to departure. A 20% cancellation fee is applicable.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample4">
          <div class="card card-body">
            If you cannot make it to the departure point on time you may cancel or rebook your ticket 6 hours prior to departure by contacting customer care or any of our offices.
          </div>
        </div>
      </div>
    </div> <br> <br>
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">What documentation must I have to board the bus?</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample2">Do I have to print out my bus ticket?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample7" aria-expanded="false" aria-controls="multiCollapseExample2">Where can I find special offers, discounts and vouchers?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample8" aria-expanded="false" aria-controls="multiCollapseExample2">When should I be at the departure location?</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample5">
          <div class="card card-body">
            Bring along your ticket or ticket reference number along with your ID book.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample6">
          <div class="card card-body">
            Yes. If your ticket purchased through third party agents you will receive a ticket. If you have purchased your ticket online or do not have a printed ticket you may proceed to any of our offices to have your ticket printed provided you have your valid ID.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample7">
          <div class="card card-body">
            Check out our social media pages.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample8">
          <div class="card card-body">
            30-45 Minutes prior to departure
          </div>
        </div>
      </div>
    </div>
    
    <h3>Children, Adolescents, Students & Seniors</h3>

    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample9" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Can my child travel alone by seat saver bus?</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample10" aria-expanded="false" aria-controls="multiCollapseExample2">How much luggage can I take with me on a coach?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample11" aria-expanded="false" aria-controls="multiCollapseExample2">Is oversized luggage allowed on board?</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample12" aria-expanded="false" aria-controls="multiCollapseExample2">Can I take my pet on this bus trip?</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample9">
          <div class="card card-body">
            No. Children under 12 need to be accompanied by an adult.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample10">
          <div class="card card-body">
            Each pax is allowed one suitcase weighing 25kg free, and one hand luggage, thereafter each kg is charged at R5.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample11">
          <div class="card card-body">
            Yes. You will however be charged an additional fee for this.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample12">
          <div class="card card-body">
            No. Only guide dogs are allowed.
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
h1{
    color: #7ddff1;
    font-weight: bold;
}
h3{
    color: white;
    text-decoration: underline;
}

.questions{
    background-color: #001f31;
}
.btn{
    background-color: #7ddff1;
    margin-inline: 2rem;
    border: 2px solid #001f31;
}
.btn:hover{
    background-color: #001f31;
    color: #7ddff1;
}
h3{
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>