var app = angular.module('portfolioApp', []);

app.controller('CertificatesController', function($scope) {
    $scope.certificates = [
        { title: "Java basic Hackerrank", image: "javabasic.png" },
        { title: "Postman API Fundamentals", image: "postmanapifundamentals.png" },
        { title: "Cloud computing fundamentals", image: "cloudsem3.png" },
        { title: "Cloud computing architecture", image: "cloudsem4.png" },
        { title: "Python basic hackerrank", image: "pythonbasic.png" },
        { title: "Javascript bootcamp", image: "letsupgrade.jpeg" },
        { title: "Coursera Excel", image: "courseraexcel.png" },
        { title: "Microsoft AI Oddessy", image: "microsoftaioddessy.jpeg" }
    ];

    // Function to chunk the certificates into rows
    function chunkArray(array, chunkSize) {
        var result = [];
        for (var i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }

    // Initialize filteredCertificateRows with all certificates
    $scope.filteredCertificateRows = chunkArray($scope.certificates, 3);

    // Watch for changes in the search query
    $scope.$watch('searchQuery', function(newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.filteredCertificateRows = chunkArray(
                $scope.certificates.filter(function(certificate) {
                    return certificate.title.toLowerCase().includes(newValue.toLowerCase());
                }),
                3
            );
        }
    });
});

