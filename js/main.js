$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-time');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-time')
        $('.navbar').removeClass('nav-toggle')
        
        // navbar move function
        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#65b741','box-shadow':'0 .3rem .5rem rgba(0, 0, 0, .3)'})
        }else
        $('.header').css({'background':'none','box-shadow':'none'})
    })
    // FAQ function 
    $('.subject-header').click(function(){
        $('.subject .subject-body').slideUp();
        $(this).next('.subject-body').slideDown();
        $('.subject .subject-header span').text('+')
        $(this).children('span').text('-')
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const streakCountElement = document.getElementById("streak-count");
    const photoUploadInput = document.getElementById("photo-upload");
    const photoPreview = document.getElementById("uploaded-photo-preview");
  
    // Initialize streak from localStorage
    let streakCount = parseInt(localStorage.getItem("streakCount")) || 0;
    streakCountElement.textContent = streakCount;
  
    // Event listener for photo upload
    photoUploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // Update streak count
        streakCount++;
        streakCountElement.textContent = streakCount;
        localStorage.setItem("streakCount", streakCount);
  
        // Show uploaded photo
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo">`;
        };
        reader.readAsDataURL(file);
      }
    });
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const currentStreakElement = document.getElementById("current-streak");
    const totalUploadsElement = document.getElementById("total-uploads");
    const streakChart = document.getElementById("streak-chart");
  
    // Get streak data from localStorage
    const streakCount = parseInt(localStorage.getItem("streakCount")) || 0;
    const uploadHistory = JSON.parse(localStorage.getItem("uploadHistory")) || [];
  
    // Update dashboard stats
    currentStreakElement.textContent = streakCount;
    totalUploadsElement.textContent = uploadHistory.length;
  
    // Generate streak trend chart
    const chartLabels = uploadHistory.map((entry) => entry.date);
    const chartData = uploadHistory.map((entry) => entry.streak);
  
    new Chart(streakChart, {
      type: "line",
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Streak Trend",
            data: chartData,
            borderColor: "#4caf50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      },
    });
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const streakCountElement = document.getElementById("streak-count");
    const photoUploadInput = document.getElementById("photo-upload");
    const photoPreview = document.getElementById("uploaded-photo-preview");
  
    // Initialize streak and upload history from localStorage
    let streakCount = parseInt(localStorage.getItem("streakCount")) || 0;
    let uploadHistory = JSON.parse(localStorage.getItem("uploadHistory")) || [];
    streakCountElement.textContent = streakCount;
  
    // Event listener for photo upload
    photoUploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // Update streak count
        streakCount++;
        streakCountElement.textContent = streakCount;
        localStorage.setItem("streakCount", streakCount);
  
        // Add to upload history
        const today = new Date().toLocaleDateString();
        uploadHistory.push({ date: today, streak: streakCount });
        localStorage.setItem("uploadHistory", JSON.stringify(uploadHistory));
  
        // Show uploaded photo
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo">`;
        };
        reader.readAsDataURL(file);
      }
    });
  });
  



  document.addEventListener("DOMContentLoaded", () => {
    const competitorSelect = document.getElementById("competitor-select");
    const metricsTable = document.getElementById("metrics-table");
  
    // Example data for competitors
    const competitors = {
      competitor1: {
        traffic: [1200, 1500, 1800, 2000, 2500],
        engagement: [300, 350, 400, 450, 500],
        metrics: {
          "Website Traffic (Monthly)": "2,500 visits",
          "Social Media Engagement": "500 likes",
          "Market Share": "15%",
        },
      },
      competitor2: {
        traffic: [800, 1000, 1100, 1400, 1600],
        engagement: [200, 220, 250, 300, 350],
        metrics: {
          "Website Traffic (Monthly)": "1,600 visits",
          "Social Media Engagement": "350 likes",
          "Market Share": "10%",
        },
      },
      competitor3: {
        traffic: [1000, 1200, 1300, 1600, 1900],
        engagement: [250, 280, 320, 400, 450],
        metrics: {
          "Website Traffic (Monthly)": "1,900 visits",
          "Social Media Engagement": "450 likes",
          "Market Share": "12%",
        },
      },
    };
  
    // Initialize Charts
    const trafficChart = new Chart(document.getElementById("traffic-chart"), {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Website Traffic",
            data: competitors.competitor1.traffic,
            borderColor: "#4caf50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
          },
        ],
      },
    });
  
    const engagementChart = new Chart(document.getElementById("engagement-chart"), {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Social Media Engagement",
            data: competitors.competitor1.engagement,
            backgroundColor: "#4caf50",
          },
        ],
      },
    });
  
    // Update Dashboard on Competitor Selection
    competitorSelect.addEventListener("change", (event) => {
      const selectedCompetitor = competitors[event.target.value];
  
      // Update Metrics Table
      metricsTable.innerHTML = "";
      for (const [metric, value] of Object.entries(selectedCompetitor.metrics)) {
        metricsTable.innerHTML += `<tr><td>${metric}</td><td>${value}</td></tr>`;
      }
  
      // Update Charts
      trafficChart.data.datasets[0].data = selectedCompetitor.traffic;
      trafficChart.update();
  
      engagementChart.data.datasets[0].data = selectedCompetitor.engagement;
      engagementChart.update();
    });
  
    // Populate initial metrics
    competitorSelect.dispatchEvent(new Event("change"));
  });
  
  