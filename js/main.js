(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    

    //Form
 document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formWa");

  if (!form) {
    console.error("Form dengan id 'formWa' tidak ditemukan.");
    return;
  }

  const namaInput = document.getElementById("nama");
  const alamatInput = document.getElementById("alamat");
  const subjectInput = document.getElementById("subject");
  const pesanInput = document.getElementById("pesan");

  namaInput.oninvalid = function () {
    this.setCustomValidity("Silakan isi nama lengkap Anda.");
  };
  namaInput.oninput = function () {
    this.setCustomValidity("");
  };

  alamatInput.oninvalid = function () {
    this.setCustomValidity("Silakan isi alamat domisili Anda.");
  };
  alamatInput.oninput = function () {
    this.setCustomValidity("");
  };

  subjectInput.oninvalid = function () {
    this.setCustomValidity("Silakan isi keperluan konsultasi.");
  };
  subjectInput.oninput = function () {
    this.setCustomValidity("");
  };

  pesanInput.oninvalid = function () {
    this.setCustomValidity("Silakan tuliskan pesan Anda.");
  };
  pesanInput.oninput = function () {
    this.setCustomValidity("");
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = namaInput.value;
    const alamat = alamatInput.value;
    const subject = subjectInput.value;
    const pesan = pesanInput.value;

    const nomorWA = "6289523744187"; // Ganti dengan nomormu

    const teks = `Halo, saya *${nama}* ingin konsultasi.%0A*Alamat Domisili:* ${alamat}%0A*Keperluan Konsultasi:* ${subject}%0A*Pesan:* ${pesan}`;
    const url = `https://wa.me/${nomorWA}?text=${teks}`;

    console.log("Opening WA URL:", url);
    window.open(url, "_blank");
  });
});




})(jQuery);

