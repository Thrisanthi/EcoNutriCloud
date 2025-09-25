$(document).ready(function () {
    $('.PayWithRazorpay').click(function (e) {
        e.preventDefault();

        var fname = $("[name='fname']").val();
        var lname = $("[name='lname']").val();
        var email = $("[name='email']").val();
        var phone = $("[name='phone']").val();
        var address = $("[name='address']").val();
        var city = $("[name='city']").val();
        var state = $("[name='state']").val();
        var country = $("[name='country']").val();
        var pincode = $("[name='pincode']").val();
        var token = $("[name='csrfmiddlewaretoken']").val();

        if (!fname || !lname || !email || !phone || !address || !city || !state || !country || !pincode) {
            Swal.fire({
                icon: "error",
                title: "Alert!",
                text: "All fields are mandatory",
            });
            return false;
        } else {
            $.ajax({
                type: "GET",
                url: "/proceed-to-pay",  // backend creates Razorpay order
                success: function (response) {
                    var options = {
                        "key": "rzp_test_RKc7sSScKAA385",
                        "amount": response.amount,
                        "currency": response.currency,
                        "name": "EcoNutriCloud",
                        "description": "Order Payment",
                        "order_id": response.id,  // ✅ real Razorpay order_id
                        "handler": function (responseb) {
                            var data = {
                                "fname": fname,
                                "lname": lname,
                                "email": email,
                                "phone": phone,
                                "address": address,
                                "city": city,
                                "state": state,
                                "country": country,
                                "pincode": pincode,
                                "payment_mode": "Paid by Razorpay",
                                "payment_id": responseb.razorpay_payment_id,
                                "order_id": responseb.razorpay_order_id,
                                "signature": responseb.razorpay_signature,   // ✅ include signature
                                csrfmiddlewaretoken: token
                            };

                            $.ajax({
                                type: "POST",
                                url: "/place-order",
                                data: data,
                                success: function (responsec) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Congratulations!",
                                        text: responsec.status
                                    }).then(() => {
                                        window.location.href = "/my-orders";
                                    });
                                }
                            });
                        },
                        "prefill": {
                            "name": fname + " " + lname,
                            "email": email,
                            "contact": phone
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
                }
            });
        }
    });
});