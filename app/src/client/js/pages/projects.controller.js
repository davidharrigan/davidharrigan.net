(function () {
  'use strict';

  var projects = [
    {
      'title': '3D Audio Visualizer',
      'desc': 'This audio visualizer is written in C++. It uses FMOD library for audio processing via Fast Fourier Transform. The graphics is written in OpenGL with GLSL.',
      'demo': 'https://www.youtube.com/watch?v=py7rk2NNqWY',
      'source': 'https://github.com/davidharrigan/audio-visualizer',
      'img': 'http://img.youtube.com/vi/py7rk2NNqWY/0.jpg'
    },
    {
      'title': 'Particle Audio Visualizer',
      'desc': 'This is a simple audio visualizer using OpenFrameworks in C++.',
      'demo': 'https://www.youtube.com/watch?v=haboDPAG0fc',
      'source': 'https://github.com/davidharrigan/Audio-Visualizer-Particles',
      'img': 'http://img.youtube.com/vi/haboDPAG0fc/0.jpg'
    },
    {
      'title': 'IP Calculator',
      'desc': 'This is a simple IP calculator implemented in Python and uses PyQt4 for the GUI. After validating the input, it displays the subnet, first and last hosts, broadcast, and subnet id from the given IP and prefix length.',
      'source': 'https://github.com/davidharrigan/IP-Calculator',
      'img': '/static/img/ip_calc.png'
    }
  ];

  var app = angular.module('dh.pages');
  app.controller('projectPageController', ['$scope', ProjectPageController]);

  function ProjectPageController($scope) {
    var vm = this;

    vm.projects = projects;
    return vm;
  }
})();
