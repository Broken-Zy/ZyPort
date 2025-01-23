document.getElementById('btnRes').addEventListener('click', function() {
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = 'pdf/AGUITONG-RESUME.pdf'; // Path to your PDF file
    pdfViewer.style.display = 'block'; // Make the embed element visible
});