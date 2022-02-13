// enquiry form
// enquiry form
// enquiry form
// enquiry form

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)






    


// window.addEventListener("DOMContenteLoaded", function(){
//     //get the form element defined in your form HTML above.
//     var form = document.getElementById("my-form");
//     var status = document.getElementById("status");

//     //success and error funtions for after the form is submitted.

//     function success() {
//         form.reset();
//         status.classList.add('success');
//         status.innerHTML= "Thanks!";
//     }

//     function error() {
//         status.classList.add('error');
//         status.innerHTML = "Oops! there was an error."
//     }

//     //handle the form submission event
//     form.addEventListener("submit", function (ev) {
//         ev.preventDefault();
//         var data = new FormData(form);
//         ajax(form.method, form.action, data, success, error);
//     });
// });

// //helper function for sending an ajax request
// function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method.url);
//     xhr.setRequestHeader("accept", "application/json");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState !==XMLHttpRequest.DONE)return;
//         if (xhr.status === 200) {
//             success(xhr.response, xhr.responseType);
//         }else{
//             error(xhr.status, xhr.response, xhr.responseType);
//         }
//     };
//     xhr.send(data);
// }