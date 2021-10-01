$(document).ready(function () {
  console.log("ready");
  $('.action2').click(function () {
    $(".container").after(
      `<div class="innerDetails">
          <div class="collapse1">
              <h1>Education</h1>
              <button class="sub2"><i class="fas fa-minus"></i></button>
          </div>
          <h2>Fill Your Details: </h2>
          <p class="note">Note: Click on the the field of education and fill the mandatory requirements</p>
          <div class="tenth">
            <div class="innerflex">  
              
              <h3 class="t10">10TH</h3>
            </div>    
              <button class="innerb1"><i class="fas fa-plus"></i></button>
          </div>
          <div class="twelfth">
            <div class="innerflex">  
              
              <h3 class="t12">12TH</h3>
            </div>  
              <button class="innerb2"><i class="fas fa-plus"></i></button>
          </div>
          <div class="Graduation">
            <div class="innerflex">  
              
              <h3 class="t13">Graduation</h3>
          
             </div>
              <button class="innerb3"><i class="fas fa-plus"></i></button>
          </div>
      </div>`
    );
    //collapse button
    $(".sub2").click(function () {
      $(".innerDetails").hide();
      //$(".profile").show();
      //$(".profile").css({"opacity":"100%"}); 
      $(".innerb1").css({ "opacity": "100%" });
      $("body").css({ "overflow-y": "scroll" });
      //  $(".container").css({"overflow-y":"scroll"});
      $('button').attr('disabled', false);
      $('.value3').unbind('click', false);
      $(".container").css({ "opacity": "100%" });
      $(".picture").css({ "opacity": "100%" });
    });


    //Button Visibility under InnerDetails
    $('.value3').bind('click', false);
    $('button').attr('disabled', true);
    $('.innerb1').attr('disabled', false);
    $('.sub2').attr('disabled', false);
    $('.innerb2').attr('disabled', false);
    $('.innerb3').attr('disabled', false);
    $('.innerarrow').attr('disabled', false);

    //modified css under innerDetails 
    $(".container").css({ "opacity": "0.2" });
    $(".picture").css({ "opacity": "0.2" });
    $(".innerDetails").css({ "position": "absolute" });








    // Inner Button 1 function
    $('.innerb1').click(function () {
      $('.container').after(`<div class="color1 cont1">
        <div class="el1">
        <div class="collapse2">
        <h1>10th</h1>
         <button class="sub1"><i class="fas fa-minus"></i></button>
        </div>
        <h1 class="innerp1">Enter Your Details:</h1>

        <form action="/api/v1/profile/education/matric" class="form1" method='POST'>
        <input type='text' class="i1" placeholder='Enter your School Name' name='schoolName'/>
        <input type='text' class="i2" placeholder='Enter Your Total Percentage' name='totalPercentage'/>
        <div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        </form>

        </div>
        </div>
        `);
      $(".picture").css({ "justify-content": "center", "align-items": "center" });
      //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
      // $(".innerDetails").css({"opacity":"0.4"});
      $(".innerDetails").hide();
      //$(".color1 *").prop('enabled', true);
      $("input").addClass("main2");
      $(".container").css({ "opacity": "0.2" });
      $(".picture").css({ "opacity": "0.2" });
      //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
      $(".color1").css({ "position": "absolute", "background-color": "white", "border-radius": "2%", "align-items": "center", "top": "600px", "z-index": "9", "padding": "20px 20px 20px 20px" });
      $(".submit1").css({ "position": "relative", "top": "25px" });
      //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
      $(".main2").css({ "position": "relative", "max-width": "450px", "width": "73%" });

      //$("body").css({"overflow":"hidden"});
      //$(".container").css({"overflow":"hidden"});

      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      $(".submit1").attr('disabled', false);
      $(".sub1").attr('disabled', false);
      $('.value3').bind('click', false);
      $(".cont1").css({ "max-width": "700px", "width": "73%", "max-height": "550px", "height": "78%" });
      $(".innerp1").css({ "font-family": "Poppins , sans-serif" });

      //submit button
      $(".form1").submit(function () {
        alert("Submitted");
      });





      //collapse button
      $(".sub1").click(function () {
        $(".color1").hide();
        //$(".profile").show();
        //$(".profile").css({"opacity":"100%"});
        $(".innerDetails").show();
        $(".innerb1").css({ "opacity": "100%" });
        $("body").css({ "overflow-y": "scroll" });
        //  $(".container").css({"overflow-y":"scroll"});
        $('button').attr('disabled', false);
        $('.value3').unbind('click', false);
        $(".innerDetails").css({ "opacity": "100%" });
      });
    });

    // Inner Button 2 function
    $('.innerb2').click(function () {
      $('.container').after(`<div class="color1 cont1">
        <div class="el1">
        <div  class="collapse2">
             <h1>12th</h1> 
             <button class="sub1"><i class="fas fa-minus"></i></button>
             </div>
        <h1 class="innerp2">Enter Your Details:</h1>
        <form action="/api/v1/profile/education/inter" class="form2" method='POST'>
        
        <input type='text' class="i1" placeholder='Enter your College Name' name='schoolName'/>
        <input type='text' class="i2" placeholder='Enter Your Total Percentage' name='totalPercentage' />
        <div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        </form>
        </div>
        </div>
        `);

      //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
      $(".innerDetails").hide();
      //$(".innerDetails").css({"opacity":"0.4"});
      //$(".color1 *").prop('enabled', true);
      $("input").addClass("main2");
      $(".container").css({ "opacity": "0.2" });
      $(".picture").css({ "opacity": "0.2" });
      //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
      $(".color1").css({ "position": "absolute", "background-color": "white", "border-radius": "2%", "align-items": "center", "top": "600px", "z-index": "9", "padding": "20px 20px 20px 20px" });
      $(".submit1").css({ "position": "relative", "top": "25px" });
      //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
      $(".main2").css({ "position": "relative", "max-width": "450px", "width": "73%" });

      //$("body").css({"overflow":"hidden"});
      //$(".container").css({"overflow":"hidden"});

      //$('.action2').attr('disabled', true);
      $('button').attr('disabled', true);
      //$("this").attr("disabled","true") 
      $(".submit1").attr('disabled', false);
      $(".sub1").attr('disabled', false);
      $('.value3').bind('click', false);
      //$(".cont1").css({"width":"540px","height":"500px"});
      $(".cont1").css({ "max-width": "700px", "width": "73%", "max-height": "550px", "height": "78%" });
      $(".innerp2").css({ "font-family": "Poppins , sans-serif" });

      //submit
      $(".form2").submit(function () {
        alert("Submitted");
      });




      //collapse button
      $(".sub1").click(function () {
        $(".color1").hide();
        $(".innerDetails").show();
        //$(".profile").show();
        //$(".profile").css({"opacity":"100%"});
        //$("this").attr('diabled',false);
        $(".innerb2").css({ "opacity": "100%" });
        $("body").css({ "overflow-y": "scroll" });
        $(".container").css({ "overflow-y": "scroll" });
        $('button').attr('disabled', false);
        $('.value3').unbind('click', false);
        $(".innerDetails").css({ "opacity": "100%" });
      });
    });

    // Inner Button 3 function
    $('.innerb3').click(function () {
      $('.container').after(`<div class="color1 cont1">
        <div class="el1">
        <div class="collapse2">
        <h1>Graduation</h1>
        <button class="sub1"><i class="fas fa-minus"></i></button>
        </div>
        <h1 class="innerp1">Enter Your Details:</h1>
        <form action="/api/v1/profile/education/graduation" method="POST" class="form3">
        <div>
        <input type='text' class="i1" placeholder='Enter College Name' name='collegeName'/>
        </div>
        <select name="sem" class="dropdown" >
               <option value=1>Semester 1</option>
               <option value=2>Semester 2</option>
               <option value=3>Semester 3</option>
               <option value=4>Semester 4</option>
               <option value=5>Semester 5</option>
               <option value=6>Semester 6</option>
               <option value=7>Semester 7</option>
               <option value=8>Semester 8</option>
        </select>
        <div>
        <input type='number' class="i2" placeholder='Enter Your Score' name='cgpa'/>
        </div>
        <div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        </form>
        </div>
        </div>
        `);

      //Modified CSS  under color1
      //$(".innerDetails *").prop('disabled',true);
      // $(".innerDetails").css({"opacity":"0.4"});
      $(".innerDetails").hide();
      //$(".color1 *").prop('enabled', true);
      $("input").addClass("main2");
      $(".container").css({ "opacity": "0.2" });
      $(".picture").css({ "opacity": "0.2" });
      //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
      $(".color1").css({ "position": "absolute", "background-color": "white", "border-radius": "2%", "align-items": "center", "top": "600px", "z-index": "9", "padding": "20px 20px 20px 20px" });
      $(".submit1").css({ "position": "relative", "top": "25px" });
      //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
      $(".main2").css({ "position": "relative", "max-width": "450px", "width": "73%" });

      //$("body").css({"overflow":"hidden"});
      //$(".container").css({"overflow":"hidden"});

      $('.action3').attr('disabled', true);
      $('button').attr('disabled', true);
      $(".submit1").attr('disabled', false);
      $(".sub1").attr('disabled', false);
      $('.value3').bind('click', false);
      $(".cont1").css({ "max-width": "700px", "width": "73%", "max-height": "550px", "height": "78%" });
      $(".innerp1").css({ "font-family": "Poppins , sans-serif" });

      //submit
      $(".form3").submit(function () {
        alert("Submitted");
      });



      //collapse button
      $(".sub1").click(function () {
        $(".color1").hide();
        $(".innerDetails").show();
        //$(".profile").show();
        //$(".profile").css({"opacity":"100%"});
        $('.action3').attr('disabled', false);
        $(".innerb3").css({ "opacity": "100%" });
        $("body").css({ "overflow-y": "scroll" });
        //  $(".container").css({"overflow-y":"scroll"});
        $('button').attr('disabled', false);
        $('.value3').unbind('click', false);
        $(".innerDetails").css({ "opacity": "100%" });
      });
    });
  });


  $('.action3').click(function () {
    $('.container').after(`<div class="color2 cont2">
        <div class="el1">
         <div class="collapse2">
        <h1>Skills</h1>
        <button class="sub3"><i class="fas fa-minus"></i></button>
        </div>
        <h1 class="innerp1">Enter Your Details:</h1>
        <form class="form4" method="POST" action="/api/v1/profile/education/skills" >
            <input type='text' class="i1" placeholder='Enter your Course Name' name='title'/>
            <input type='text' class="i2" placeholder='Enter Your Certificate Credentials' name='link'/>
            <div>
            <button type='submit' class="submit1">Submit!</button>
            </div>
        </form>
        </div>
        </div>
        `);

    $(".innerDetails").hide();

    //Modified CSS  under color1
    //$(".innerDetails *").prop('disabled',true);
    //$(".innerDetails").css({"opacity":"0.4"});
    //$(".color1 *").prop('enabled', true);
    $("input").addClass("main2");
    $(".container").css({ "opacity": "0.2" });
    $(".picture").css({ "opacity": "0.2" });
    //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
    $(".color2").css({ "position": "absolute", "background-color": "white", "border-radius": "2%", "align-items": "center", "top": "600px", "z-index": "9", "padding": "20px 20px 20px 20px" });
    $(".submit1").css({ "position": "relative", "top": "25px" });
    //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
    $(".main2").css({ "position": "relative", "max-width": "450px", "width": "73%" });

    //$("body").css({"overflow":"hidden"});
    //$(".container").css({"overflow":"hidden"});

    //$('.action2').attr('disabled', true);
    $('button').attr('disabled', true);
    $('.action2').attr('diabled', true);
    $(".submit1").attr('disabled', false);
    $(".sub3").attr('disabled', false);
    $('.value3').bind('click', false);
    $(".cont2").css({ "max-width": "540px", "width": "73%", "max-height": "500px", "height": "78%" });
    $(".innerp1").css({ "font-family": "Poppins , sans-serif" });

    //submit
    $(".form4").submit(function () {
      alert("Submitted");
    });



    //collapse button
    $(".sub3").click(function () {
      $(".color2").hide();
      //$(".profile").show();
      $(".container").css({ "opacity": "100%" });
      $(".picture").css({ "opacity": "100%" });
      $('.action2').attr('diabled', false);
      $(".innerb2").css({ "opacity": "100%" });
      $("body").css({ "overflow-y": "scroll" });
      //  $(".container").css({"overflow-y":"scroll"});
      $('button').attr('disabled', false);
      $('.value3').unbind('click', false);
      $(".innerDetails").css({ "opacity": "100%" });
    });

  });

  $('.action4').click(function () {
    $('.container').after(`<div class="color3 cont3">
        <div class="el1">
         <div class="collapse2">
        <h1>Achievements and Responsibilities</h1>
        <button class="sub4"><i class="fas fa-minus"></i></button>
        </div>
        <h1 class="innerp1">Enter Your Details:</h1>
        <form class="form5" method="POST" action="/api/v1/profile/education/achievement" >
        <input type='text' class="i1" placeholder='Enter Your Achievement/Responsibilities' name='title'/>
        <input type='text' class="i2" placeholder='Provide a Short Description' name='description'/>
        <div>
        <button type='submit' class="submit1">Submit!</button>
        </div>
        </form>
        </div>
        </div>
        `);

    $(".innerDetails").hide();
    $(".color2").hide();
    //Modified CSS  under color1
    //$(".innerDetails *").prop('disabled',true);
    //$(".innerDetails").css({"opacity":"0.4"});
    //$(".color1 *").prop('enabled', true);
    $("input").addClass("main2");
    $(".container").css({ "opacity": "0.2" });
    $(".picture").css({ "opacity": "0.2" });
    //$(".sub1").css({"position":"relative","left":"35px","bottom":"10px"});
    $(".color3").css({ "position": "absolute", "background-color": "white", "border-radius": "2%", "align-items": "center", "top": "600px", "z-index": "9", "padding": "20px 20px 20px 20px" });
    $(".submit1").css({ "position": "relative", "top": "25px" });
    //$(".el1").css({"position":"relative","left":"25px","padding-top":"0.05px","padding-bottom":"15px"});
    $(".main2").css({ "position": "relative", "max-width": "450px", "width": "73%" });

    //$("body").css({"overflow":"hidden"});
    //$(".container").css({"overflow":"hidden"});

    //$('.action2').attr('disabled', true);
    $('button').attr('disabled', true);
    $('.action2').attr('diabled', true);
    $(".submit1").attr('disabled', false);
    $(".sub4").attr('disabled', false);
    $('.value3').bind('click', false);
    $(".cont3").css({ "max-width": "540px", "width": "73%", "max-height": "500px", "height": "78%" });
    $(".innerp1").css({ "font-family": "Poppins , sans-serif" });

    //submit
    $(".form5").submit(function () {
      alert("Submitted");
    });


    //collapse button
    $(".sub4").click(function () {
      $(".color3").hide();
      //$(".profile").show();
      $(".container").css({ "opacity": "100%" });
      $(".picture").css({ "opacity": "100%" });
      $('.action2').attr('diabled', false);
      $(".innerb2").css({ "opacity": "100%" });
      $("body").css({ "overflow-y": "scroll" });
      //  $(".container").css({"overflow-y":"scroll"});
      $('button').attr('disabled', false);
      $('.value3').unbind('click', false);
      $(".innerDetails").css({ "opacity": "100%" });
    });

  });





  $(".arrow1").on("click", function () {
    //$('.arrow2').attr('disabled', false);
    //$(".innerinfo2").show();
    $(".info2").after(`<div class="innerinfo2">
             
             <div class="ifb1"> 
             <p>why</p>
             <button class="pen"><i class="fas fa-pen"></i></button>
             </div>

            </div>`);
    $('button').prop('disabled', true);
    $(".pen").prop('disabled', false);
    $(`<button class="innerarrow1 f6"><i class="fas fa-chevron-down"></i></button>`).insertAfter(this)
    $(this).hide();
    //  $(".arrow1").replaceWith(`<button class="innerarrow1"><i class="fas fa-chevron-down"></i></button>`);
    // $(`<button class="innerarrow1 f2"><i class="fas fa-chevron-down"></i></button>`).insertBefore(".text1");
    // $(".f1").remove();
    $(".innerarrow1").on("click", function () {
      $(`<button class="arrow1"><i class="fas fa-chevron-right"></i></button>`).insertAfter(".innerarrow1")
      // $(".arrow1").load(location.href+" .arrow1*","");
      //  $(".innerarrow1").replaceWith(`<button class="arrow1"><i class="fas fa-chevron-right"></i></button>`);
      // $(".innnerarrow1")
      $(".innerinfo2").hide();
      $(".innerarrow1").hide();
      // $(".arrow1").show();
      // $(".f2").remove();
      // $(`<button class="arrow1 f1"><i class="fas fa-chevron-right"></i></button>`).insertAfter(".main");
      // $('button').prop("disabled", false);
      $('button').prop('disabled', false);
      location.reload();
    });
    $('.arrow1').on('click', true);
    $('.arrow1').attr('disabled', false);

    // for(let i = 0; i < 20; i++) {
    //   $('.arrow1' + i).click( function(){
    //     alert('you clicked ' + i);
    //   });
    // }
  });

  $(".arrow2").on("click", function () {
    //$('.arrow2').attr('disabled', false);
    //$(".innerinfo2").show();
    $(".info3").after(`<div class="innerinfo2">
               
               <div class="ifb1"> 
               <p>why</p>
               <button class="pen"><i class="fas fa-pen"></i></button>
               </div>
  
              </div>`);
    $('button').prop('disabled', true);
    $(".pen").prop('disabled', false);
    $(`<button class="innerarrow1 f6"><i class="fas fa-chevron-down"></i></button>`).insertAfter(this)
    $(this).hide();
    //  $(".arrow1").replaceWith(`<button class="innerarrow1"><i class="fas fa-chevron-down"></i></button>`);
    // $(`<button class="innerarrow1 f2"><i class="fas fa-chevron-down"></i></button>`).insertBefore(".text1");
    // $(".f1").remove();
    $(".innerarrow1").on("click", function () {
      $(`<button class="arrow1"><i class="fas fa-chevron-right"></i></button>`).insertAfter(".innerarrow1")
      // $(".arrow1").load(location.href+" .arrow1*","");
      //  $(".innerarrow1").replaceWith(`<button class="arrow1"><i class="fas fa-chevron-right"></i></button>`);
      // $(".innnerarrow1")
      $(".innerinfo2").hide();
      $(".innerarrow1").hide();
      // $(".arrow1").show();
      // $(".f2").remove();
      // $(`<button class="arrow1 f1"><i class="fas fa-chevron-right"></i></button>`).insertAfter(".main");
      // $('button').prop("disabled", false);
      $('button').prop('disabled', false);
      location.reload();
    });
    $('.arrow1').on('click', true);
    $('.arrow1').attr('disabled', false);

    // for(let i = 0; i < 20; i++) {
    //   $('.arrow1' + i).click( function(){
    //     alert('you clicked ' + i);
    //   });
    // }
  });
  $(".edit").on("click", function () {
      $(".picture").hide()
      $(".container").hide()
      $(".container").after(`
      <form action="" method="POST" class="eform"> 
      <div class="picture">
           <input name ="<%=user.photo%>"type="File" accept=".jpg">
         </div>
      <div class="container">       
         <div class="name">
            <h1 class="fnt">
              <input name="title" placeholder="<%= user.firstName + user.lastName %>" type="text">
            </h1>
         </div>
   
         <div class="icons">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         </div>
   
         <div class="bio">
            <p>
            <textarea name="title" rows="4" cols="50">
            <%= user.bio %>
           </textarea>
            </p>
         </div>
   
         <div id="cont">
            <div class="Basic-Info">
               <div class="xyz">
                  <h2><i class="fas fa-info-circle"></i> Basic-Info</h2>
   
               </div>
               <div class="s1">
                  <div class="is1">
                     <p>Full Name</p>
                  </div>
                  <div class="is2">
                     <p>
                        <input name="" placeholder=" <%= user.firstName %>
                        <%=user.lastName %>" type="text">
                     </p>
                  </div>
               </div>
               <div class="s2">
                  <div class="is3">
                     <p>Gender</p>
                  </div>
                  <div class="is4">
                     <p>
                        <input name="title" placeholder="<%= user.gender %>" type="text">
                     </p>
                  </div>
               </div>
               <div class="s3">
                  <div class="is4">
                     <p>Email</p>
                  </div>
                  <div class="is5">
                     <p>
                        <input name="title" placeholder="<%= user.email %>" type="text">
                     </p>
                  </div>
               </div>
               <div class="s4">
                  <div class="is6">
                     <p>Age</p>
                  </div>
                  <div class="is7">
                     <p>
                        <input name="title" placeholder="<%= user.age %>" type="text">
                     </p>
                  </div>
               </div>
   
            </div>
   
            <div class="Education">
               <div class="course">
                  <h2><i class="fas fa-book-reader"></i> Education</h2>
                  <button class="add action2"><i class="fas fa-plus"></i></button>
               </div>
   
               <div class="course main info2">
                     <%if(user.education){%>
                        <% user.education.forEach(education=>{%>
                        <div class="innerflex">
                           <p class="text2 select5">
                              <input name="title" placeholder="<%=education.title%>" type="text">
                           </p>
                        </div>
                           <% })%>
                              <%}%>
                  
   
                  <% if(user.education){ %>
                     <% user.education.forEach(education=>{ %>
                        <p class="value2 select6">
                           <input name="cgpa" placeholder="<%=education.obtainedMarks%>
                           <%= education.totalMarks %>" type="text">
                        </p>
                        <% }) %>
                           <% } %>
               </div>
   
            </div>
   
   
   
            <div class="Skills">
               <div class="course">
                  <h2><i class="fas fa-brain"></i> Skills</h2>
                  <button class="add action3"><i class="fas fa-plus"></i></button>
               </div>
   
               <div class="qualification">
                  <div class="course info3">
                     
   
                        <%if(user.skills){%>
                           <% user.skills.forEach(skills=>{%>
                           <div class="innerflex">
                              <p class="text3">
                                 <input name="title" placeholder="<%=skills.title %>" type="text">
                              </p>
                           </div>
                              <%})%>
                                 <% }%>
                    
                                 
   
                     <% if(user.skills){ %>
                        <% user.skills.forEach(function(skills){ %>
                           <input name="link" placeholder="<%=skills.link %>" type="text">
                           <% }) %>
                              <% } %>
                  </div>
   
               </div>
   
            </div>
   
            <div class="rR">
               <div class="course">
                  <h2><i class="fas fa-trophy"></i> Achievement and Responsibilites</h2>
                  <button class="add action4"><i class="fas fa-plus"></i></button>
               </div>
               <div class="block">
   
   
                  <% if(user.achievements){ %>
                     <% user.achievements.forEach(achievements=>{ %>
                        <p class="text3">
                           <input name="title" placeholder="<%=achievements[i].title %>" type="text">
                        </p>
                        <% }) %>
                           <% } %>
   
                              <% if(user.achievements){ %>
                                 <% user.achievements.forEach(achievements=>{ %>
                                    
                                    <p class="value3">
                                       <input name="description" placeholder="<%=achievements[i].description%>" type="text">
                                       
                                    </p>
                                    <% }) %>
                                       <% } %>
   
               </div>
               
            </div>
         </div>
   
         <button type="submit" class="submit2">Submit!</button>
      </div>
      </form>
      `);
      $(".submit2").on("click", function () {
        $(".container").show();
        $(".picture").show();
      });
    

  });

});
