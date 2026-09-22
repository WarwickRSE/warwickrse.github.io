const projects = [
{ "name": "LMFDB", "language": ["Python", "SQL"], "description": "Improvements to a mathematical functions web database resource. We contributed to the transition from MongoDB to PostGres and updated the login infrastructure, as well as improving the editing interface.", "duration": "24", "date": "01-06-18", "size": "large" },
{ "name": "EPOCH PIC code", "language": ["Fortran", "MPI"], "description": "Feature development, bug fixes and support work on the EPOCH plasma physics code. Including MPI fixes, data structure updates and user support", "duration": "24", "date": "01-08-18", "size": "large" },

{ "name": "OPS domain specific language", "language": ["C", "C++"], "description": "Using a newly developed domain specific language designed to allow codes to run on different hardwares in an existing fluid dynamcis code designed to handle resolving eddys in complex flows.", "duration": "9", "date": "01-10-20", "size": "large" },
{ "name": "Translating a Soot simulation code", "language": ["Matlab", "Fortran"], "description": "Translating a code from Matlab into Fortran and parallelising it for ensemble runs. The code simulates motion of particles in suspension. We also guided the researchers through how to run ensembles on available hardware.", "duration": "6", "date": "01-07-21", "size": "small" },

{ "name": "Concord text concordance analysis", "language": "Perl", "description": "Adjusting a text concordance tool to run on larger data sets using HPC resources. The code development part was primarily adding a restart facility to allow searching for a large word set on a computer with walltime limits.", "duration": "3", "date": "01-09-19", "size": "small" },

{ "name": "Sentiment Analysis on social media", "language": ["Python", "JS"], "description": "Developing a small tool to allow pulling of Youtube comments and Twitter tweets via their APIs and running an existing sentiment analysis tool on the results. We also supported the researcher in using this on available hardware", "duration": "3", "date": "01-04-20", "size": "small" },

{ "name": "Ising Magnetisation Model GPU optimisation", "language": ["C++", "CUDA"], "description": "Optimising a code to model magnetisation of materials for use on GPUs", "duration": "60", "date": "01-03-19", "size": "medium" },
{ "name": "EVT Gen", "language": ["C++"], "description": "Updating a particle physics event generation code to be usable in threaded workflows. This required workarounds as the design was not amenable, but allowed us to uncover the places where future work would be needed.", "duration": "12", "date": "01-08-21", "size": "large" },

{ "name": "Cell Dynamics", "language": "C++", "description": "Developing a bespoke molecular-dynamics-style code to simulate part of the process of cell division. This included solving the numerical problem of simulating very stiff rods in viscous fluids over long durations.", "duration": "14", "date": "01-05-23", "size": "large" },

{ "name": "TRM Subs", "language": ["C++", "Python"], "description": "Modernising the astrophysics codes written by Tom Marsh, including updates and installation tweaks", "duration": "11", "date": "01-09-24", "size": "medium" },

{ "name": "PyBAMM battery simulation", "language": "Python", "description": "Improving and optimising the PyBAMM batter simulation package", "duration": "24", "date": "01-06-23", "size": "large" },

{ "name": "Microscopy Image Pipeline", "language": ["C++", "Matlab", "Python"], "description": "This project had a variety of tasks. Initially we focussed on translating Matlab code into C++. Later we were tasked to provide with an image sharing and processing platform, which we did by spinning-up a custom copy of the Galaxy platform for data-intensive biomedical research, and creating a custom tool for the work.", "duration": "18", "date": "01-11-23", "size": "large" },

{ "name": "TRACC - particle tracking for detectors", "language": "C++", "description": "Performance benchmarking of an existing code, including on novel hardware via access to the Dirac GPU Testbed resource", "duration": "", "date": "01-04-26", "size": "" },

{ "name": "Excalibur Particle Physics Optimisation ", "language": "C++", "description": "Work on the Orange and VecGeom particle physics and reactor simulation codes, optimisating the handling of Geometry subroutines. These are used to map between the physical detector and container structures and the particle tracks being simulated.", "duration": "24", "date": "01-12-22", "size": "large" },


{ "name": "PicoBot", "language": "Python", "description": "Supporting development of a Python tool for Teraherz skin imaging in medical physics. We worked on several elements although in the end the researchers changed tack and did things differently", "duration": "6", "date": "01-04-25", "size": "small" },
{ "name": "Math RAD Proton SDE", "language": ["Fortran", "C++"], "description": "Integrating a prototype 'condensed history' proton transport model into existing particle transport codes for medical research", "duration": "6", "date": "01-03-26", "size": "large" },

{"name": "Geant4 CPP-TEPP", "language": "C++", "description": "Adding Testing and Documentation (and minor bug fixes) to the Geant Particle Physics simulation suite. Part of a CoSec project for community development of Computational Particle Physics codes.", "duration": "12", "date": "01-04-26", "size": "large" },
{ "name": "Internal Tool Development", "language": ["PHP", "SQL", "HTML", "JS"] , "description": "Updating and extending the internal system handling host (computer) IP address management, network management and queue management. For modernisation and to support network changes imposed by IDG", "duration": "-1", "date": "01-04-25", "size": "medium" },
{"name": "PyBAMM battery simulation - ctd", "language": "Python", "description": "", "duration": "60", "date": "01-05-25", "size": "medium" },
{ "name": "SAMS - Solar Atmospheric Modelling Suite", "language": ["C++", "MPI", "CUDA", "Kokkos"], "description": "Developing a framework code for sun-to-earth modelling of the solar and space environment. Including architecting the code, developing performant parallelisation strategies, high performance IO and numerical techniques", "duration": "60", "date": "01-07-26", "size": "medium" },
{ "name": "TRM Subs - ctd", "language": ["C++", "Python", "Rust"], "description": "A continuation of work on Tom Marsh's astrophysics simulation codes. This part of the project involves translating some of the core routines from C++ to Rust and adding Python bindings", "duration": "6", "date": "01-09-26", "size": "small" },


{ "name": "", "language": "", "description": "", "duration": "", "date": "01-04-26", "size": "" }

];
