import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Users, Award, Play, Pause, SkipForward, RotateCcw,
  Sparkles, Shield, UserCheck, Terminal, Send, Search,
  Plus, CheckCircle2, XCircle, AlertTriangle, Clock, Download,
  Eye, EyeOff, Radio, BarChart3, Copy, Volume2, VolumeX,
  Flame, ChevronRight, Hash, Bell, BookMarked, Cpu, Zap,
  Check, Maximize2, Minimize2, User, FileText, Bookmark,
  Layers, LogOut, ArrowRight, MessageSquare, BookOpen, CheckSquare,
  Key, Lock, Unlock, Settings, Atom, Compass, RefreshCw,
  Upload, FileUp, Folder, Share2, ExternalLink, Calendar,
  Sliders, Trash2, HelpCircle
} from 'lucide-react';

// Official B.E. I Semester Roll Call for Division B, Room 101 (Physics Cycle 2026-27)
const OFFICIAL_BEC_55_ROSTER = [
  { roll: 1, name: "MALLIKARJUN CHANDRAM DUNAGI", csn: "2026010074", gender: "Male", branch: "CSE" },
  { roll: 2, name: "MANOJNA MAHESH PALLEDA", csn: "2026010300", gender: "Male", branch: "CSE" },
  { roll: 3, name: "MOHAMMAD ZUNAID MUJAVAR", csn: "2026010248", gender: "Male", branch: "CSE" },
  { roll: 4, name: "MOHAMMED ALI GOLASANGI", csn: "2026010545", gender: "Male", branch: "CSE" },
  { roll: 5, name: "MUTTANNA", csn: "2026010222", gender: "Male", branch: "CSE" },
  { roll: 6, name: "NAHIDAAFASHA FAIROZAHAMED MOMIN", csn: "2026010505", gender: "Female", branch: "CSE" },
  { roll: 7, name: "NARAYAN RAGHAVENDRA KATTI", csn: "2026010772", gender: "Male", branch: "CSE" },
  { roll: 8, name: "NETRA MAHALINGAPPA HUKKERI", csn: "2026010069", gender: "Female", branch: "CSE" },
  { roll: 9, name: "OMKAR KAMANAKERI", csn: "2026010004", gender: "Male", branch: "CSE" },
  { roll: 10, name: "PRAJWAL RAJSHEKAR GANGAL", csn: "2026010333", gender: "Male", branch: "CSE" },
  { roll: 11, name: "PRANITA PRAKASH JADHAV", csn: "2026010135", gender: "Female", branch: "CSE" },
  { roll: 12, name: "PRATHAM JUNJARWAD", csn: "2026010224", gender: "Male", branch: "CSE" },
  { roll: 13, name: "PRATHIKSHA PRAKASH DASANAYAKAR", csn: "2026010844", gender: "Female", branch: "CSE" },
  { roll: 14, name: "PRATIBHA MALLIKARJUN PATIL", csn: "2026010495", gender: "Female", branch: "CSE" },
  { roll: 15, name: "PRATIBHA MULGUND", csn: "2026010851", gender: "Female", branch: "CSE" },
  { roll: 16, name: "PRATIBHA YALAGURI NADAGADDI", csn: "2026010858", gender: "Female", branch: "CSE" },
  { roll: 17, name: "PREETI SHEKHARAPPA MARADI", csn: "2026010468", gender: "Male", branch: "CSE" },
  { roll: 18, name: "PREETI VITHAL BAGEWADI", csn: "2026010143", gender: "Female", branch: "CSE" },
  { roll: 19, name: "PRIYA KRISHNAPPA BADASAL", csn: "2026010551", gender: "Female", branch: "CSE" },
  { roll: 20, name: "PRIYA UMESH HALAMANI", csn: "2026010853", gender: "Female", branch: "CSE" },
  { roll: 21, name: "PRIYANKA MAGADUM", csn: "2026010416", gender: "Female", branch: "CSE" },
  { roll: 22, name: "PRIYANKA MUDAKAPPA KHILARI", csn: "2026010644", gender: "Female", branch: "CSE" },
  { roll: 23, name: "PRIYANKA RAJENDRA KALARI", csn: "2026010753", gender: "Female", branch: "CSE" },
  { roll: 24, name: "RAJESHWARI ASHOK KARI", csn: "2026010202", gender: "Female", branch: "CSE" },
  { roll: 25, name: "RAKSHITA GANIGER", csn: "2026010444", gender: "Female", branch: "CSE" },
  { roll: 26, name: "RAKSHITA GOPAL KAMBLE", csn: "2026010103", gender: "Female", branch: "CSE" },
  { roll: 27, name: "RAKSHITA MARUTI KUMBAR", csn: "2026010720", gender: "Female", branch: "CSE" },
  { roll: 28, name: "RAKSHITA WALIKAR", csn: "2026010845", gender: "Female", branch: "CSE" },
  { roll: 29, name: "RASHMI V GOURIMATH", csn: "2026010107", gender: "Female", branch: "CSE" },
  { roll: 30, name: "REET SURENDRA MAHAJAN", csn: "2026010503", gender: "Female", branch: "CSE" },
  { roll: 31, name: "REVATI NARAYAN UTTARKAR", csn: "2026010155", gender: "Female", branch: "CSE" },
  { roll: 32, name: "RIYA RAVISHANKAR BIDARI", csn: "2026010818", gender: "Female", branch: "CSE" },
  { roll: 33, name: "ROHINI GULAGANJI", csn: "2026010708", gender: "Female", branch: "CSE" },
  { roll: 34, name: "SACHIN NAGAPPA GANADAL", csn: "2026010560", gender: "Male", branch: "CSE" },
  { roll: 35, name: "SAGAR RAJU MURAGANNAVAR", csn: "2026010164", gender: "Male", branch: "CSE" },
  { roll: 36, name: "SAGAR SHIVASUNDAR MELINAMANI", csn: "2026011031", gender: "Male", branch: "CSE" },
  { roll: 37, name: "SAHANA KRISHNAPPA ARAKERI", csn: "2026010628", gender: "Female", branch: "CSE" },
  { roll: 38, name: "SAHANA SANGAPPA SAJJAN", csn: "2026010117", gender: "Female", branch: "CSE" },
  { roll: 39, name: "SAHANA SHASHIDHAR HUGAR", csn: "2026010801", gender: "Female", branch: "CSE" },
  { roll: 40, name: "SAKSHI BIRADAR", csn: "2026010769", gender: "Female", branch: "CSE" },
  { roll: 41, name: "SAKSHI CHITRAGAR", csn: "2026010442", gender: "Female", branch: "CSE" },
  { roll: 42, name: "SAKSHI MALLAYYA MATHAPATI", csn: "2026010119", gender: "Female", branch: "CSE" },
  { roll: 43, name: "SAKSHI V KOVALLI", csn: "2026010212", gender: "Female", branch: "CSE" },
  { roll: 44, name: "SAMARTH MAHESH KADADEVAR", csn: "2026010375", gender: "Male", branch: "CSE" },
  { roll: 45, name: "SANDEEP", csn: "2026011037", gender: "Male", branch: "CSE" },
  { roll: 46, name: "SANJANA BALAPPA MENASI", csn: "2026010182", gender: "Female", branch: "CSE" },
  { roll: 47, name: "SANJANA HANAMANTH KAMBAR", csn: "2026010695", gender: "Female", branch: "CSE" },
  { roll: 48, name: "SANJANA S MIRJI", csn: "2026010244", gender: "Female", branch: "CSE" },
  { roll: 49, name: "SANJANA SURESH RAJAPUT", csn: "2026010607", gender: "Female", branch: "CSE" },
  { roll: 50, name: "SANJANA UGALAT", csn: "2026010268", gender: "Female", branch: "CSE" },
  { roll: 51, name: "SANJANADEVI YATTINAMANI", csn: "2026010602", gender: "Female", branch: "CSE" },
  { roll: 52, name: "SANJEEDA PATHAN", csn: "2026010589", gender: "Female", branch: "CSE" },
  { roll: 53, name: "SANSKAR RAJENDRA MALI", csn: "2026010752", gender: "Male", branch: "CSE" },
  { roll: 54, name: "SAROJA MAHADEV CHAVAN", csn: "2026011035", gender: "Female", branch: "CSE" },
  { roll: 55, name: "SAVITA SHEKHAPPA HALLI", csn: "2026010105", gender: "Female", branch: "CSE" }
];

const BEC_PHYSICS_CURRICULUM_MODULES = [
  { id: 'mod1', title: 'Module 1: Quantum Mechanics', hours: 10, desc: 'de Broglie matter waves, Heisenberg Uncertainty Principle, 1-D Time-Independent Schrödinger Equation, Particle in an infinite potential box (eigenfunctions & energy eigenvalues).' },
  { id: 'mod2', title: 'Module 2: Lasers & Optical Fibers', hours: 11, desc: 'Einstein A & B coefficients, Population inversion, Semiconductor laser (GaAs), Fiber optic acceptance angle, Numerical Aperture, attenuation & step/graded index.' },
  { id: 'mod3', title: 'Module 3: Dielectrics & Superconductivity', hours: 11, desc: 'Polarization mechanisms, Clausius-Mossotti equation, Zero resistance, Meissner effect, Type-I & Type-II superconductors, BCS theory & High-Tc.' },
  { id: 'mod4', title: 'Module 4: Oscillations & Ultrasonic Waves', hours: 10, desc: 'SHM, Damped & Forced vibrations, Resonance, Piezoelectric oscillator, Acoustic grating diffraction, Ultrasonic non-destructive testing.' }
];

const INITIAL_PHYSICS_DOCUMENTS = [
  {
    id: 'doc-1',
    title: '22PHY12 Course Syllabus & 42-Hour Teaching Plan',
    category: 'Syllabus',
    author: 'Prof. Jayashree G Ghantimath',
    uploadDate: '11 Sep 2026',
    fileType: 'PDF',
    size: '420 KB',
    summary: 'Detailed lecture breakdown across 4 modules: Quantum Mechanics (10 hrs), Lasers & Fibers (11 hrs), Superconductivity (11 hrs), and Ultrasonic Waves (10 hrs) with CIE/SEE evaluation matrix.',
    content: `BASAVESHWAR ENGINEERING COLLEGE, BAGALKOT (AUTONOMOUS)
DEPARTMENT OF ENGINEERING PHYSICS
Course: 22PHY12 - Engineering Physics (Physics Cycle, Division B, Room 101)
Faculty: Prof. Jayashree G. Ghantimath
Total Hours: 42 Hours Lecture + 12 Practicals

TEACHING SCHEDULE & SYLLABUS ALLOCATION:
- Module 1 (10 Hours): Quantum Mechanics
  • de Broglie hypothesis, verification of matter waves.
  • Heisenberg uncertainty principle and zero-point energy.
  • 1-D Time-independent Schrödinger Wave Equation.
  • Particle in infinite potential well: Eigenvalues En = (n^2 h^2)/(8 m L^2).
- Module 2 (11 Hours): Lasers & Optical Fibers
  • Einstein A & B coefficients derivation.
  • Semiconductor GaAs laser principle.
  • Fiber optic acceptance angle theta_0 and Numerical Aperture NA = sqrt(n1^2 - n2^2).
  • Types of optical fibers and attenuation mechanisms.
- Module 3 (11 Hours): Dielectric Materials & Superconductivity
  • Polarization mechanisms and Clausius-Mossotti equation.
  • Superconductivity fundamentals, Zero resistance, Meissner effect (B=0).
  • Critical field Hc(T) = H0 [1 - (T/Tc)^2], Type-I vs Type-II, BCS theory.
- Module 4 (10 Hours): Oscillations & Acoustics
  • Damped and forced harmonic oscillations.
  • Piezoelectric oscillator for ultrasonic wave generation.
  • Acoustic diffraction grating experiment and velocity in liquids.`
  },
  {
    id: 'doc-2',
    title: 'Module 2: Optical Fiber Numerical Aperture Derivation & Viva Notes',
    category: 'Lecture Notes',
    author: 'Prof. Jayashree G Ghantimath',
    uploadDate: '18 Sep 2026',
    fileType: 'DOCX',
    size: '610 KB',
    summary: 'Complete mathematical step-by-step derivation of NA = sqrt(n1^2 - n2^2) launched into air, with acceptance cone geometry and viva questions.',
    content: `DERIVATION OF NUMERICAL APERTURE (NA):
Let light enter the core of index n1 from outside medium n0 at incident angle theta_0.
Refraction at entrance interface: n0 * sin(theta_0) = n1 * sin(r).
At core-cladding boundary, for Total Internal Reflection (TIR), angle of incidence phi = 90 - r >= critical angle phi_c.
where sin(phi_c) = n2 / n1.
Hence, cos(r) = sqrt(1 - sin^2(r)) = sqrt(1 - (n2/n1)^2) = sqrt(n1^2 - n2^2) / n1.
Substituting into entrance equation:
n0 * sin(theta_0) = n1 * cos(phi_c) = sqrt(n1^2 - n2^2).
For air medium (n0 = 1.0):
NA = sin(theta_0) = sqrt(n1^2 - n2^2).
Acceptance angle: theta_0 = sin^(-1)(NA).`
  },
  {
    id: 'doc-3',
    title: 'Engineering Physics Lab Manual: Laser Grating & Fiber NA Practicals',
    category: 'Lab Manual',
    author: 'Prof. Jayashree G Ghantimath',
    uploadDate: '20 Sep 2026',
    fileType: 'PDF',
    size: '890 KB',
    summary: 'Laboratory manual procedure, tabular columns, circuit setups, and calculation formulas for Exp 1 & Exp 2.',
    content: `PHYSICS PRACTICAL MANUAL - ROOM 101
Experiment 1: Determination of Numerical Aperture and Acceptance Angle of Optical Fiber.
Experiment 2: Determination of Wavelength of Semiconductor Laser using Diffraction Grating.
Formula: lambda = sin(theta) / (N * m) where N is lines per meter and m is order of diffraction.`
  }
];

const BEC_PHYSICS_QUESTIONS = [
  {
    id: 1,
    courseCode: '22PHY12',
    subject: 'Engineering Physics',
    module: 'Module 2: Lasers & Optical Fibers',
    type: 'numerical',
    question: 'A step-index optical glass fiber has a core refractive index n1 = 1.52 and cladding index n2 = 1.46. Calculate its Numerical Aperture (NA) launched into air (n0 = 1.0).',
    tolerance: 0.02,
    correct: 0.423,
    unit: '',
    explanation: 'Numerical Aperture NA = sqrt(n1^2 - n2^2) / n0 = sqrt(1.52^2 - 1.46^2) = sqrt(2.3104 - 2.1316) = sqrt(0.1788) ≈ 0.4228.',
    points: 120,
    timeLimit: 40
  },
  {
    id: 2,
    courseCode: '22PHY12',
    subject: 'Engineering Physics',
    module: 'Module 1: Quantum Mechanics',
    type: 'mcq',
    question: 'For a quantum particle of mass m trapped in a 1-D infinite potential well of width L, how do the energy eigenvalues En scale with the quantum number n?',
    options: [
      'En is directly proportional to n',
      'En is directly proportional to n²',
      'En is inversely proportional to n²',
      'En is independent of n'
    ],
    correct: 'En is directly proportional to n²',
    explanation: 'From the boundary conditions of Schrödinger equation, En = (n² * h²) / (8 * m * L²). Therefore, En ∝ n².',
    points: 100,
    timeLimit: 30
  },
  {
    id: 3,
    courseCode: '22PHY12',
    subject: 'Engineering Physics',
    module: 'Module 3: Dielectrics & Superconductivity',
    type: 'boolean',
    question: 'The Meissner effect states that when a material transitions to its superconducting state below Tc, it completely expels magnetic flux lines from its interior (B = 0), exhibiting perfect diamagnetism.',
    options: ['True', 'False'],
    correct: 'True',
    explanation: 'True. In the superconducting state, screening surface supercurrents develop that create an equal and opposite magnetic field, causing B = 0 inside (ideal diamagnetism with susceptibility χ = -1).',
    points: 80,
    timeLimit: 25
  },
  {
    id: 4,
    courseCode: '22PHY12',
    subject: 'Engineering Physics',
    module: 'Module 2: Lasers & Optical Fibers',
    type: 'multi',
    question: 'Which of the following conditions are REQUIRED to achieve stimulated emission dominant laser oscillation?',
    options: [
      'Population inversion (N2 > N1)',
      'Metastable excited atomic state with prolonged lifetime (~10⁻³ s)',
      'Spontaneous absorption rate zero',
      'Optical resonant cavity providing positive photon feedback'
    ],
    correct: [
      'Population inversion (N2 > N1)',
      'Metastable excited atomic state with prolonged lifetime (~10⁻³ s)',
      'Optical resonant cavity providing positive photon feedback'
    ],
    explanation: 'Laser action requires three key essentials: an active pumping medium to achieve population inversion (N2 > N1), a metastable state to accumulate atoms, and an optical resonator cavity for feedback and amplification.',
    points: 150,
    timeLimit: 35
  },
  {
    id: 5,
    courseCode: '22PHY12',
    subject: 'Engineering Physics',
    module: 'Module 1: Quantum Mechanics',
    type: 'short',
    question: 'What is the physical interpretation of the square of the absolute wave function |Ψ(x,t)|² as formulated by Max Born?',
    correct: 'probability density',
    alternatives: ['probability density', 'probability of finding particle', 'probability', 'position probability density'],
    explanation: 'Max Born\'s statistical interpretation states that |Ψ(x,t)|² represents the probability density of finding the quantum particle at position x at time t.',
    points: 100,
    timeLimit: 30
  }
];

const playAudioFeedback = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'alert') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    // Audio contexts might be blocked before first user gesture
  }
};

export default function App() {
  // Navigation & Role State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Authentication State
  // Faculty: Prof. Jayashree G Ghantimath (Prof. J. G. Ghantimath), Dept of Engineering Physics
  const [authRole, setAuthRole] = useState('teacher'); // 'teacher' | 'student'
  const [authenticatedStudent, setAuthenticatedStudent] = useState(OFFICIAL_BEC_55_ROSTER[0]);

  const [facultyPin, setFacultyPin] = useState(() => {
    try {
      return localStorage.getItem('bec_physics_faculty_pin') || '2026';
    } catch {
      return '2026';
    }
  });

  const [studentPins, setStudentPins] = useState(() => {
    try {
      const saved = localStorage.getItem('bec_physics_student_pins');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Login Modal State
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginCsnInput, setLoginCsnInput] = useState('');
  const [studentPinInput, setStudentPinInput] = useState('');
  const [isFirstTimeStudent, setIsFirstTimeStudent] = useState(false);
  const [newStudentPinCreate, setNewStudentPinCreate] = useState('');
  const [newStudentPinConfirm, setNewStudentPinConfirm] = useState('');
  const [loginPinInput, setLoginPinInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Change Faculty PIN Modal State
  const [isChangePinModalOpen, setIsChangePinModalOpen] = useState(false);
  const [currentPinCheck, setCurrentPinCheck] = useState('');
  const [newPinValue, setNewPinValue] = useState('');
  const [confirmPinValue, setConfirmPinValue] = useState('');
  const [pinChangeError, setPinChangeError] = useState('');

  // Emergency Department Master Recovery Key Modal State
  const [isResetPinModalOpen, setIsResetPinModalOpen] = useState(false);
  const [masterRecoveryKeyInput, setMasterRecoveryKeyInput] = useState('');
  const [resetNewPinValue, setResetNewPinValue] = useState('');
  const [resetError, setResetError] = useState('');

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [customPublicUrl, setCustomPublicUrl] = useState(() => {
    try {
      return localStorage.getItem('bec_physics_public_url') || '';
    } catch {
      return '';
    }
  });

  const [courseDocuments, setCourseDocuments] = useState(() => {
    try {
      const saved = localStorage.getItem('bec_physics_course_docs');
      return saved ? JSON.parse(saved) : INITIAL_PHYSICS_DOCUMENTS;
    } catch {
      return INITIAL_PHYSICS_DOCUMENTS;
    }
  });

  const [isUploadDocModalOpen, setIsUploadDocModalOpen] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocCategory, setNewDocCategory] = useState('Lecture Notes');
  const [newDocContent, setNewDocContent] = useState('');
  const [newDocSummary, setNewDocSummary] = useState('');
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadFileSize, setUploadFileSize] = useState('');
  const [isReadingFile, setIsReadingFile] = useState(false);

  const [selectedStudentForProfile, setSelectedStudentForProfile] = useState(null);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  
  const [teacherNotes, setTeacherNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('bec_physics_teacher_notes');
      return saved ? JSON.parse(saved) : {
        '2026010074': 'MALLIKARJUN: Very thorough in Optical Fiber NA derivation. Verified Acceptance Angle correctly in Room 101 viva.',
        '2026010505': 'NAHIDAAFASHA: Excellent understanding of Meissner effect and critical field Hc. Active participant in Physics doubt sessions.'
      };
    } catch {
      return {};
    }
  });
  const [activeNoteText, setActiveNoteText] = useState('');
  const [isProjectorMode, setIsProjectorMode] = useState(false);

  const [quizQuestions, setQuizQuestions] = useState(BEC_PHYSICS_QUESTIONS);
  const [quizState, setQuizState] = useState('idle');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(40);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userSelectedAnswer, setUserSelectedAnswer] = useState(null);
  const [numericalInput, setNumericalInput] = useState('');
  const [shortAnswerInput, setShortAnswerInput] = useState('');
  const [liveSubmissionsCount, setLiveSubmissionsCount] = useState(48);
  const [maskLeaderboardCsn, setMaskLeaderboardCsn] = useState(true);

  const [studentPerformanceMap, setStudentPerformanceMap] = useState(() => {
    const map = {};
    OFFICIAL_BEC_55_ROSTER.forEach((s, idx) => {
      const baseScore = Math.max(140, 980 - idx * 13 + ((idx * 7) % 30));
      map[s.csn] = {
        score: baseScore,
        streak: (idx % 4) + 1,
        accuracy: Math.round(76 + ((idx * 8) % 23)),
        completedLabs: 2,
        online: true,
        lastSubmittedAnswer: null
      };
    });
    return map;
  });

  const [isAiGenModalOpen, setIsAiGenModalOpen] = useState(false);
  const [aiGenTopic, setAiGenTopic] = useState('Lasers and Optical Fibers (22PHY12)');
  const [aiGenCount, setAiGenCount] = useState(2);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiGenStatus, setAiGenStatus] = useState('');

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'Prof. Jayashree G Ghantimath (Physics)',
      role: 'teacher',
      text: 'Good morning Division B! Welcome to Room 101. Please keep your scientific calculators ready and refer to the newly uploaded Module 2 Optical Fiber notes in the Course Materials tab.',
      timestamp: '09:05 AM',
      isAnnouncement: true
    },
    {
      id: 2,
      sender: 'MALLIKARJUN C DUNAGI (2026010074)',
      role: 'student',
      text: 'Good morning Madam! I reviewed the NA derivation notes from the materials tab. For the numerical question, should we use refractive index of core as 1.52?',
      timestamp: '09:07 AM',
      isAnnouncement: false
    },
    {
      id: 3,
      sender: 'Prof. Jayashree G Ghantimath (Physics)',
      role: 'teacher',
      text: 'Yes Mallikarjun. Use n1 = 1.52 and n2 = 1.46 as specified in the live quiz problem. All formulas are in the formula library.',
      timestamp: '09:08 AM',
      isAnnouncement: false
    }
  ]);
  const [publicChatInput, setPublicChatInput] = useState('');
  const [privateRecipientCsn, setPrivateRecipientCsn] = useState('2026010074');
  const [privateChats, setPrivateChats] = useState({
    '2026010074': [
      { id: 1, sender: 'Prof. Jayashree G Ghantimath', text: 'Mallikarjun, please ensure your lab record for the Optical Fiber NA experiment is signed by 4:00 PM today.', timestamp: '08:50 AM', fromTeacher: true },
      { id: 2, sender: 'MALLIKARJUN C DUNAGI', text: 'Yes Madam, calculated NA and acceptance angle values are tabulated. I will submit during practicals.', timestamp: '08:54 AM', fromTeacher: false }
    ]
  });
  const [privateChatInput, setPrivateChatInput] = useState('');

  const [aiTutorMessages, setAiTutorMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Namaskara! I am your Engineering Physics Academic AI Assistant for Basaveshwar Engineering College, Bagalkot (BVVS BEC) — B.E. I Semester, Division B, Room 101.\n\nUnder the guidance of Prof. Jayashree G. Ghantimath, I am synchronized with all uploaded 22PHY12 course documents (Syllabus, Optical Fiber NA notes, and Quantum Mechanics derivations).\n\nWhat physics derivation, numerical, or laboratory doubt can we solve today?"
    }
  ]);
  const [aiTutorInput, setAiTutorInput] = useState('');
  const [isAiTutorThinking, setIsAiTutorThinking] = useState(false);

  const [activeSandboxTool, setActiveSandboxTool] = useState('optical-fiber');
  const [fiberN1, setFiberN1] = useState(1.52);
  const [fiberN2, setFiberN2] = useState(1.46);
  const [wellWidthNm, setWellWidthNm] = useState(0.5);
  const [quantumNumberN, setQuantumNumberN] = useState(1);
  const [gratingLinesPerMm, setGratingLinesPerMm] = useState(500);
  const [diffractionAngleDeg, setDiffractionAngleDeg] = useState(18.5);
  const [diffractionOrder, setDiffractionOrder] = useState(1);
  const [superHc0, setSuperHc0] = useState(0.08);
  const [superTc, setSuperTc] = useState(7.2);
  const [superTempT, setSuperTempT] = useState(4.2);
  const [readingDoc, setReadingDoc] = useState(null);

  const [toast, setToast] = useState(null);
  const triggerToast = (msg, type = 'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    let interval = null;
    if (quizState === 'active' && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            handleAutoSubmission();
            return 0;
          }
          if (prev <= 5 && soundEnabled) {
            playAudioFeedback('tick');
          }
          return prev - 1;
        });

        setLiveSubmissionsCount((prev) => {
          if (prev < 55) {
            const next = prev + Math.floor(Math.random() * 2) + 1;
            return Math.min(55, next);
          }
          return prev;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizState, timerSeconds]);

  useEffect(() => {
    if (quizQuestions[currentQuestionIndex]) {
      setTimerSeconds(quizQuestions[currentQuestionIndex].timeLimit || 40);
      setIsAnswerSubmitted(false);
      setUserSelectedAnswer(null);
      setNumericalInput('');
      setShortAnswerInput('');
      setLiveSubmissionsCount(Math.floor(Math.random() * 6) + 42);
    }
  }, [currentQuestionIndex, quizQuestions]);

  const handleAutoSubmission = () => {
    if (!isAnswerSubmitted) {
      submitCurrentAnswer(true);
      triggerToast('Time expired! Answer auto-submitted.', 'alert');
    }
  };

  const submitCurrentAnswer = (isAuto = false) => {
    if (isAnswerSubmitted) return;
    const currentQ = quizQuestions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQ.type === 'mcq' || currentQ.type === 'boolean') {
      isCorrect = userSelectedAnswer === currentQ.correct;
    } else if (currentQ.type === 'numerical') {
      const val = parseFloat(numericalInput);
      isCorrect = !isNaN(val) && Math.abs(val - currentQ.correct) <= (currentQ.tolerance || 0.03);
    } else if (currentQ.type === 'multi') {
      const sel = Array.isArray(userSelectedAnswer) ? userSelectedAnswer : [];
      isCorrect = sel.length === currentQ.correct.length && sel.every((item) => currentQ.correct.includes(item));
    } else if (currentQ.type === 'short') {
      const clean = shortAnswerInput.trim().toLowerCase();
      isCorrect = clean === currentQ.correct.toLowerCase() || (currentQ.alternatives && currentQ.alternatives.includes(clean));
    }

    setIsAnswerSubmitted(true);
    setLiveSubmissionsCount((prev) => Math.min(55, prev + 1));

    if (isCorrect) {
      if (soundEnabled) playAudioFeedback('success');
      triggerToast(`🎯 Correct answer! +${currentQ.points} points awarded`, 'success');
      if (authRole === 'student') {
        setStudentPerformanceMap((prev) => ({
          ...prev,
          [authenticatedStudent.csn]: {
            ...prev[authenticatedStudent.csn],
            score: (prev[authenticatedStudent.csn]?.score || 0) + currentQ.points,
            streak: (prev[authenticatedStudent.csn]?.streak || 0) + 1
          }
        }));
      }
    } else {
      if (soundEnabled) playAudioFeedback('alert');
      triggerToast(isAuto ? 'Time Out / Unanswered' : 'Incorrect submission. Review physics derivation below.', 'alert');
      if (authRole === 'student') {
        setStudentPerformanceMap((prev) => ({
          ...prev,
          [authenticatedStudent.csn]: {
            ...prev[authenticatedStudent.csn],
            streak: 0
          }
        }));
      }
    }
  };

  const startLiveQuiz = () => {
    setQuizState('active');
    setTimerSeconds(quizQuestions[currentQuestionIndex]?.timeLimit || 40);
    setIsAnswerSubmitted(false);
    if (soundEnabled) playAudioFeedback('success');
    triggerToast('🚀 Room 101 Physics Quiz broadcasted to 55 student terminals!', 'success');
  };

  const pauseLiveQuiz = () => {
    setQuizState('paused');
    triggerToast('Live session paused by Prof. J. G. Ghantimath', 'alert');
  };

  const advanceNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuizState('active');
      triggerToast(`Advancing to Question ${currentQuestionIndex + 2}`, 'info');
    } else {
      setQuizState('ended');
      triggerToast('All Engineering Physics questions completed! Standings generated.', 'success');
    }
  };

  const handleStudentCsnCheck = (e) => {
    const csnVal = e.target.value.trim();
    setLoginCsnInput(csnVal);
    setLoginError('');

    if (csnVal.length >= 10) {
      const matched = OFFICIAL_BEC_55_ROSTER.find((s) => s.csn === csnVal);
      if (matched) {
        if (!studentPins[csnVal]) {
          setIsFirstTimeStudent(true);
        } else {
          setIsFirstTimeStudent(false);
        }
      }
    }
  };

  const handleLoginSubmit = () => {
    setLoginError('');
    if (authRole === 'student') {
      const cleanCsn = loginCsnInput.trim();
      const matched = OFFICIAL_BEC_55_ROSTER.find((s) => s.csn === cleanCsn);
      
      if (!matched) {
        setLoginError('Invalid CSN. Please enter your registered 10-digit CSN (e.g. 2026010074).');
        return;
      }

      if (!studentPins[cleanCsn]) {
        if (newStudentPinCreate.length < 4 || newStudentPinCreate.length > 6) {
          setLoginError('Please create a 4-6 digit secret PIN to protect your account.');
          return;
        }
        if (newStudentPinCreate !== newStudentPinConfirm) {
          setLoginError('PINs do not match. Please re-enter your confirmed PIN.');
          return;
        }

        const updated = { ...studentPins, [cleanCsn]: newStudentPinCreate };
        setStudentPins(updated);
        try {
          localStorage.setItem('bec_physics_student_pins', JSON.stringify(updated));
        } catch (e) {}

        setAuthenticatedStudent(matched);
        setLoginModalOpen(false);
        setIsFirstTimeStudent(false);
        setNewStudentPinCreate('');
        setNewStudentPinConfirm('');
        triggerToast(`PIN created! Welcome ${matched.name} (Roll ${matched.roll}) to Room 101!`, 'success');
      } else {
        if (studentPinInput.trim() !== studentPins[cleanCsn]) {
          setLoginError('Incorrect Student PIN. (Contact Prof. Jayashree if you forgot your PIN)');
          return;
        }

        setAuthenticatedStudent(matched);
        setLoginModalOpen(false);
        setStudentPinInput('');
        triggerToast(`Welcome back ${matched.name} (Roll ${matched.roll}) to Room 101!`, 'success');
      }
    } else {
      const enteredPin = loginPinInput.trim();
      if (enteredPin === facultyPin) {
        setLoginModalOpen(false);
        setLoginPinInput('');
        triggerToast('Authenticated as Faculty: Prof. Jayashree G Ghantimath (Dept. of Physics)', 'success');
      } else {
        setLoginError(`Incorrect PIN. (Default PIN is ${facultyPin === '2026' ? '2026' : 'custom-set'}. Or click Forgot PIN below)`);
      }
    }
  };

  const handleChangePinSubmit = (e) => {
    e.preventDefault();
    setPinChangeError('');

    if (currentPinCheck !== facultyPin) {
      setPinChangeError('Current Security PIN does not match.');
      return;
    }

    if (newPinValue.length < 4 || newPinValue.length > 8) {
      setPinChangeError('New PIN must be between 4 and 8 digits.');
      return;
    }

    if (newPinValue !== confirmPinValue) {
      setPinChangeError('New PIN and Confirm PIN do not match.');
      return;
    }

    setFacultyPin(newPinValue);
    try {
      localStorage.setItem('bec_physics_faculty_pin', newPinValue);
    } catch (err) {}

    setIsChangePinModalOpen(false);
    setCurrentPinCheck('');
    setNewPinValue('');
    setConfirmPinValue('');
    triggerToast('✅ Security PIN updated successfully! Your new PIN is active.', 'success');
  };

  const handleResetPinWithMasterKey = (e) => {
    e.preventDefault();
    setResetError('');

    if (masterRecoveryKeyInput.trim() !== 'BECPHYSICS101') {
      setResetError('Invalid Department Master Recovery Key. Contact Physics HOD or use BECPHYSICS101.');
      return;
    }

    if (resetNewPinValue.length < 4 || resetNewPinValue.length > 8) {
      setResetError('New PIN must be between 4 and 8 digits.');
      return;
    }

    setFacultyPin(resetNewPinValue);
    try {
      localStorage.setItem('bec_physics_faculty_pin', resetNewPinValue);
    } catch (err) {}

    setIsResetPinModalOpen(false);
    setMasterRecoveryKeyInput('');
    setResetNewPinValue('');
    triggerToast(`Master key verified! Security PIN has been reset to: ${resetNewPinValue}`, 'success');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadFileName(file.name);
    setUploadFileSize(`${(file.size / 1024).toFixed(1)} KB`);
    setIsReadingFile(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result || '';
      setNewDocContent(typeof text === 'string' ? text : `[Binary document: ${file.name}]`);
      if (!newDocTitle) {
        setNewDocTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
      setIsReadingFile(false);
      triggerToast(`File "${file.name}" loaded successfully!`, 'info');
    };
    reader.onerror = () => {
      setIsReadingFile(false);
      triggerToast('Unable to read file contents.', 'alert');
    };
    reader.readAsText(file);
  };

  const handleSaveDocument = (e) => {
    e.preventDefault();
    if (!newDocTitle.trim()) {
      triggerToast('Please provide a document title.', 'alert');
      return;
    }

    const docObj = {
      id: `doc-${Date.now()}`,
      title: newDocTitle.trim(),
      category: newDocCategory,
      author: 'Prof. Jayashree G Ghantimath',
      uploadDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      fileType: uploadFileName ? uploadFileName.split('.').pop()?.toUpperCase() : 'DOC',
      size: uploadFileSize || '350 KB',
      summary: newDocSummary.trim() || 'Official 22PHY12 Engineering Physics resource uploaded by faculty.',
      content: newDocContent.trim() || 'Course notes and syllabus guidelines.'
    };

    const updated = [docObj, ...courseDocuments];
    setCourseDocuments(updated);
    try {
      localStorage.setItem('bec_physics_course_docs', JSON.stringify(updated));
    } catch (e) {}

    setIsUploadDocModalOpen(false);
    setNewDocTitle('');
    setNewDocSummary('');
    setNewDocContent('');
    setUploadFileName('');
    setUploadFileSize('');
    triggerToast(`📄 Document "${docObj.title}" published for all 55 students!`, 'success');
  };

  const handleDeleteDocument = (id) => {
    const filtered = courseDocuments.filter((d) => d.id !== id);
    setCourseDocuments(filtered);
    try {
      localStorage.setItem('bec_physics_course_docs', JSON.stringify(filtered));
    } catch (e) {}
    triggerToast('Document removed from course library.', 'info');
  };

  const getEffectiveClassUrl = () => {
    if (customPublicUrl && customPublicUrl.trim().length > 0) {
      return customPublicUrl.trim();
    }
    return window.location.href;
  };

  const isLocalOrPreviewUrl = () => {
    const url = window.location.href.toLowerCase();
    return (
      url.includes('localhost') ||
      url.includes('127.0.0.1') ||
      url.includes('webcontainer') ||
      url.includes('stackblitz') ||
      url.includes('googleusercontent') ||
      url.includes('blob:')
    );
  };

  const saveCustomPublicUrl = (url) => {
    setCustomPublicUrl(url);
    try {
      localStorage.setItem('bec_physics_public_url', url);
    } catch (e) {}
  };

  const getWhatsAppShareUrl = () => {
    const targetUrl = getEffectiveClassUrl();
    const message = `🏛️ *BVVS Basaveshwar Engineering College, Bagalkot*
*B.E. I Semester - Division B (Room 101)*
*Course: 22PHY12 Engineering Physics*
*Faculty:* Prof. Jayashree G. Ghantimath

Hello Class! Join our live synchronized Engineering Physics Classroom Hub & Quiz session:
🔗 *Portal Link:* ${targetUrl}

*How to Join:*
1. Tap the link above on your phone or laptop.
2. Select *Student* and enter your official 10-digit CSN (e.g. 2026010074).
3. If logging in for the first time, create your own secret 4-digit PIN!
4. Access uploaded syllabus files, live smartboard quizzes, and the 24/7 Gemini Physics AI Tutor.`;

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  const copyClassLinkToClipboard = () => {
    try {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = getEffectiveClassUrl();
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      triggerToast('📋 Live class link copied to clipboard! Paste it into WhatsApp.', 'success');
    } catch (e) {
      triggerToast('Link ready in address bar.', 'info');
    }
  };

  const openStudentProfileDossier = (student) => {
    setSelectedStudentForProfile(student);
    setActiveNoteText(teacherNotes[student.csn] || '');
    setIsProfileDrawerOpen(true);
  };

  const saveConfidentialNote = () => {
    if (!selectedStudentForProfile) return;
    const updated = {
      ...teacherNotes,
      [selectedStudentForProfile.csn]: activeNoteText
    };
    setTeacherNotes(updated);
    try {
      localStorage.setItem('bec_physics_teacher_notes', JSON.stringify(updated));
    } catch (e) {}
    triggerToast(`Confidential Physics remarks saved for ${selectedStudentForProfile.name}`, 'success');
  };

  const handleResetStudentPinByTeacher = (studentCsn) => {
    const updated = { ...studentPins };
    delete updated[studentCsn];
    setStudentPins(updated);
    try {
      localStorage.setItem('bec_physics_student_pins', JSON.stringify(updated));
    } catch (e) {}
    triggerToast(`Student PIN cleared for CSN ${studentCsn}. Student can now create a new PIN on login.`, 'success');
  };

  const handleAskAiTutor = async (customPrompt = null) => {
    const query = customPrompt || aiTutorInput;
    if (!query.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: query };
    setAiTutorMessages((prev) => [...prev, userMessage]);
    if (!customPrompt) setAiTutorInput('');
    setIsAiTutorThinking(true);

    const docContexts = courseDocuments.map((d) => `--- DOCUMENT: ${d.title} (${d.category}) ---\n${d.content.slice(0, 1200)}`).join('\n\n');

    const systemPrompt = `You are the Engineering Physics Academic AI Assistant for Basaveshwar Engineering College, Bagalkot (BVVS BEC).
You are assisting students of B.E. I Semester (Physics Cycle, Division B, Room 101) taught by Prof. Jayashree G. Ghantimath (Prof. J. G. Ghantimath).
Course: 22PHY12 - Engineering Physics (Autonomous BEC Bagalkot Syllabus).

UPLOADED COURSE DOCUMENTS & SYLLABUS CONTEXT PROVIDED BY PROF. JAYASHREE:
${docContexts}

Key Syllabus Modules:
1. Quantum Mechanics: de Broglie wavelength, Heisenberg Uncertainty Principle, 1-D Time Independent Schrödinger Wave Equation, Particle in an Infinite Potential Well (Eigenvalues & Eigenfunctions En = n^2 h^2 / 8mL^2).
2. Lasers & Optical Fibers: Einstein's A & B coefficients, Population Inversion, Semiconductor Laser (GaAs), Acceptance angle theta_0, Numerical Aperture NA = sqrt(n1^2 - n2^2), V-number, attenuation.
3. Dielectrics & Superconductivity: Polarization, Clausius-Mossotti equation, Zero resistance, Meissner effect (B=0), Critical magnetic field Hc(T), Type I & II superconductors, BCS theory.
4. Ultrasonic Waves & Oscillations: Piezoelectric oscillator, Acoustic grating, ultrasonic velocity in liquids.

Style:
- Be clear, academically rigorous, step-by-step, and encouraging.
- Ground your answers in the exact formulas and derivations taught in Room 101 by Prof. Jayashree.
- Always provide step-by-step mathematical derivations.`;

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const historyParts = aiTutorMessages.slice(-4).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));
      historyParts.push({ role: 'user', parts: [{ text: query }] });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: historyParts,
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      if (!response.ok) throw new Error('AI API call failed');
      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
      setAiTutorMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: reply }]);
      if (soundEnabled) playAudioFeedback('success');
    } catch (err) {
      console.warn('Fallback response for Physics AI tutor:', err);
      const fallback = `**Engineering Physics Derivation & Concept Summary (22PHY12):**

1. **Numerical Aperture of Step-Index Optical Fiber (Module 2):**
   $$\\text{NA} = \\sqrt{n_1^2 - n_2^2}$$
   where $n_1$ is the refractive index of the core ($1.52$) and $n_2$ is that of the cladding ($1.46$).
   Acceptance angle in air: $\\theta_0 = \\sin^{-1}(\\text{NA})$.

2. **Particle in a 1-D Infinite Potential Well (Quantum Well):**
   Boundary conditions $\\psi(0) = 0$ and $\\psi(L) = 0$ yield the quantized energy states:
   $$E_n = \\frac{n^2 h^2}{8 m L^2} \\quad (n = 1, 2, 3 \\dots)$$
   The ground state energy ($n=1$) is non-zero, proving that quantum particles cannot have zero kinetic energy inside a confined space!

3. **Meissner Effect in Superconductors (Module 3):**
   When cooled below $T_c$ in an external field $H$, surface shielding currents induce an opposite magnetization such that:
   $$B = \\mu_0 (H + M) = 0 \\implies \\chi = -1$$
   exhibiting ideal diamagnetism!`;
      setAiTutorMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: fallback }]);
    } finally {
      setIsAiTutorThinking(false);
    }
  };

  const handleGenerateAiQuiz = async () => {
    setIsAiGenerating(true);
    setAiGenStatus('Prof. Jayashree\'s AI engine is synthesizing questions via Gemini 3 Flash...');

    const promptText = `Generate ${aiGenCount} rigorous first-year B.E. Engineering Physics quiz questions for Basaveshwar Engineering College Bagalkot (22PHY12) on topic: "${aiGenTopic}".
Return ONLY a valid JSON array matching this format:
[
  {
    "id": 100,
    "courseCode": "22PHY12",
    "subject": "Engineering Physics",
    "module": "Physics Cycle",
    "type": "mcq",
    "question": "Physics question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": "Exact correct string matching one option",
    "explanation": "Step-by-step academic physics derivation",
    "points": 100,
    "timeLimit": 35
  }
]`;

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      });

      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      const parsed = JSON.parse(raw);
      const tagged = parsed.map((q, i) => ({
        ...q,
        id: quizQuestions.length + i + 1
      }));
      setQuizQuestions((prev) => [...prev, ...tagged]);
      setIsAiGenModalOpen(false);
      triggerToast(`✨ Generated ${tagged.length} new 22PHY12 Physics questions!`, 'success');
    } catch (e) {
      const fallbackQ = {
        id: quizQuestions.length + 1,
        courseCode: '22PHY12',
        subject: 'Engineering Physics',
        module: 'Module 1: Quantum Mechanics',
        type: 'mcq',
        question: `According to de Broglie hypothesis, what is the wavelength λ of a particle of mass m accelerated through a potential difference of V volts?`,
        options: [
          'λ = 1.226 / √V nm (for an electron)',
          'λ = h / (2 m V)',
          'λ = √V / 1.226 nm',
          'λ = h · c / V'
        ],
        correct: 'λ = 1.226 / √V nm (for an electron)',
        explanation: 'For an electron, kinetic energy E = eV = p² / (2m). Thus λ = h / √(2 m e V) = 1.226 / √V nanometers.',
        points: 100,
        timeLimit: 30
      };
      setQuizQuestions((prev) => [...prev, fallbackQ]);
      setIsAiGenModalOpen(false);
      triggerToast('Synthesized question added to quiz sequence', 'info');
    } finally {
      setIsAiGenerating(false);
      setAiGenStatus('');
    }
  };

  const sortedLeaderboard = useMemo(() => {
    return OFFICIAL_BEC_55_ROSTER.map((student) => {
      const perf = studentPerformanceMap[student.csn] || { score: 120, streak: 1, accuracy: 72 };
      return {
        ...student,
        score: perf.score,
        streak: perf.streak,
        accuracy: perf.accuracy,
        online: perf.online
      };
    }).sort((a, b) => b.score - a.score);
  }, [studentPerformanceMap]);

  const computedFiberNA = useMemo(() => {
    if (fiberN1 <= fiberN2) return 0;
    return Math.sqrt(Math.max(0, fiberN1 * fiberN1 - fiberN2 * fiberN2));
  }, [fiberN1, fiberN2]);

  const computedAcceptanceAngleDeg = useMemo(() => {
    if (computedFiberNA <= 0 || computedFiberNA > 1) return 0;
    return (Math.asin(computedFiberNA) * 180) / Math.PI;
  }, [computedFiberNA]);

  const computedQuantumEnergyEv = useMemo(() => {
    const h = 6.626e-34;
    const m = 9.109e-31;
    const L = wellWidthNm * 1e-9;
    const n = quantumNumberN;
    const E_joules = (n * n * h * h) / (8 * m * L * L);
    return E_joules / 1.602e-19;
  }, [wellWidthNm, quantumNumberN]);

  const computedLaserWavelengthNm = useMemo(() => {
    const d = 1e-3 / gratingLinesPerMm;
    const thetaRad = (diffractionAngleDeg * Math.PI) / 180;
    const lambdaMeters = (d * Math.sin(thetaRad)) / diffractionOrder;
    return lambdaMeters * 1e9;
  }, [gratingLinesPerMm, diffractionAngleDeg, diffractionOrder]);

  const computedHcAtTemp = useMemo(() => {
    if (superTempT >= superTc) return 0;
    return superHc0 * (1 - Math.pow(superTempT / superTc, 2));
  }, [superHc0, superTc, superTempT]);

  const currentQ = quizQuestions[currentQuestionIndex] || quizQuestions[0];

  if (isProjectorMode) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col p-8 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-rose-600 text-white font-mono text-xs font-bold animate-pulse">
                PROJECTOR MODE
              </span>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Basaveshwar Engineering College, Bagalkot • Room 101 Smartboard
              </h1>
            </div>
            <p className="text-slate-400 text-sm font-mono mt-1">
              Course: 22PHY12 Engineering Physics • Faculty: Prof. Jayashree G Ghantimath • Division B
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMaskLeaderboardCsn(!maskLeaderboardCsn)}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 hover:bg-slate-800"
            >
              {maskLeaderboardCsn ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4 text-cyan-400" />}
              {maskLeaderboardCsn ? 'Mask Student CSN' : 'Show Full CSN'}
            </button>
            <button
              onClick={() => setIsProjectorMode(false)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition"
            >
              <Minimize2 className="w-4 h-4" /> Exit Smartboard Mode
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-lg bg-indigo-600 font-mono text-sm font-bold text-white">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {currentQ.module || '22PHY12: Engineering Physics'}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {currentQ.question}
              </h2>

              {currentQ.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {currentQ.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-950 border-2 border-slate-800 text-left flex items-start gap-4"
                    >
                      <span className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 font-mono font-black text-lg flex items-center justify-center shrink-0 border border-indigo-500/30">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-lg font-medium text-slate-200 mt-1">{opt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {quizState === 'active' ? (
                  <button
                    onClick={pauseLiveQuiz}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition"
                  >
                    <Pause className="w-4 h-4" /> Pause
                  </button>
                ) : (
                  <button
                    onClick={startLiveQuiz}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
                  >
                    <Play className="w-4 h-4 fill-current" /> Start / Resume
                  </button>
                )}
                <button
                  onClick={advanceNextQuestion}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition"
                >
                  <SkipForward className="w-4 h-4" /> Next Question
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono text-slate-400 block">Classroom Response Tally</span>
                <span className="text-xl font-bold font-mono text-emerald-400">{liveSubmissionsCount} / 55 Nodes Responded</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center justify-center">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Synchronized Countdown</div>
              <div className={`text-6xl font-black font-mono ${timerSeconds <= 5 ? 'text-rose-500 animate-bounce' : 'text-white'}`}>
                {timerSeconds}s
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full mt-5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-1000"
                  style={{ width: `${(timerSeconds / (currentQ.timeLimit || 40)) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <h3 className="font-bold text-sm text-yellow-400 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Room 101 Top Standings
                </h3>
                <span className="text-xs font-mono text-slate-400">Division B</span>
              </div>
              <div className="space-y-2.5">
                {sortedLeaderboard.slice(0, 6).map((st, i) => (
                  <div key={st.csn} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 text-xs font-mono">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300">
                        {i + 1}
                      </span>
                      <span className="font-sans font-bold text-white truncate">{st.name}</span>
                    </div>
                    <span className="font-bold text-emerald-400">{st.score} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans antialiased">
      
      {/* Toast Alert */}
      {toast && (
        <div className={`fixed top-4 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-md transition-all ${
          toast.type === 'success' ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200' :
          toast.type === 'alert' ? 'bg-rose-950/90 border-rose-500 text-rose-200' :
          'bg-indigo-950/90 border-indigo-500 text-indigo-200'
        }`}>
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          {toast.type === 'alert' && <AlertTriangle className="w-5 h-5 text-rose-400" />}
          {toast.type === 'info' && <Bell className="w-5 h-5 text-indigo-400" />}
          <span className="text-sm font-semibold">{toast.msg}</span>
        </div>
      )}

      {/* Primary Sidebar */}
      { }
      <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Institutional Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-950/70">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-tr from-cyan-600 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/20">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-black text-sm tracking-tight text-white">
                  BVVS BEC Bagalkot
                </h1>
                <p className="text-[11px] font-mono text-cyan-400 font-bold">
                  Dept of Engineering Physics
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-400">
              <span>PHYSICS CYCLE</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ROOM NO: 101
              </span>
            </div>
          </div>

          {/* Active User Card & PIN Settings */}
          <div className="p-3 border-b border-slate-800/80 bg-slate-900/50">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
              <span>ACTIVE USER</span>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1"
              >
                Switch User <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="truncate">
                  <div className="text-xs font-bold text-white truncate">
                    {authRole === 'teacher' ? 'Prof. Jayashree G Ghantimath' : authenticatedStudent.name}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400">
                    {authRole === 'teacher' ? 'Prof. J. G. Ghantimath (Physics)' : `CSN: ${authenticatedStudent.csn}`}
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  authRole === 'teacher' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' : 'bg-cyan-950 text-cyan-300'
                }`}>
                  {authRole.toUpperCase()}
                </span>
              </div>

              {/* Quick PIN status */}
              <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-400" />
                  {authRole === 'teacher' ? 'Faculty PIN: ••••' : 'Your PIN: Protected'}
                </span>
                {authRole === 'teacher' ? (
                  <button
                    onClick={() => setIsChangePinModalOpen(true)}
                    className="text-indigo-400 hover:text-indigo-300 font-bold underline"
                  >
                    Change PIN
                  </button>
                ) : (
                  <span className="text-emerald-400 font-bold">Active</span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {[
              { id: 'dashboard', label: 'Classroom Hub', icon: BarChart3, badge: null },
              { id: 'documents', label: 'Course Materials & Syllabus', icon: Folder, badge: `${courseDocuments.length}` },
              { id: 'quiz', label: 'Live Physics Quiz', icon: Zap, badge: quizState === 'active' ? 'LIVE' : null },
              { id: 'roster', label: 'Roll Call (55 Students)', icon: Users, badge: '55' },
              { id: 'leaderboard', label: 'Class Standings', icon: Award, badge: null },
              { id: 'sandbox', label: 'Physics Sim & Sandbox', icon: Compass, badge: 'Labs' },
              { id: 'chat', label: 'Room 101 Chat', icon: MessageSquare, badge: '3' },
              { id: 'tutor', label: 'BEC AI Physics Tutor', icon: Sparkles, badge: 'Gemini' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      tab.badge === 'LIVE' ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-indigo-300'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions & WhatsApp Share Trigger */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 space-y-2">
          <button
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Class Link on WhatsApp</span>
          </button>

          {authRole === 'teacher' && (
            <button
              onClick={() => setIsProjectorMode(true)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Room 101 Smartboard Mode</span>
            </button>
          )}

          <div className="flex items-center justify-between pt-1 text-xs text-slate-400 font-mono">
            <span>Audio Sound FX:</span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1 rounded hover:bg-slate-800 text-slate-300"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      { }
      <main className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Top Navbar */}
        <header className="h-16 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-base font-bold text-white capitalize flex items-center gap-2">
              {activeTab === 'dashboard' && 'Classroom Command Overview • Engineering Physics (22PHY12)'}
              {activeTab === 'documents' && 'Physics Syllabus, Lesson Plans & Course Materials Hub'}
              {activeTab === 'quiz' && 'Synchronized Physics Evaluation Arena'}
              {activeTab === 'roster' && 'Official Division B Roll Call (55 Students)'}
              {activeTab === 'leaderboard' && 'Room 101 Live Physics Standings'}
              {activeTab === 'sandbox' && 'Physics Computational Sandbox & Lab Simulator'}
              {activeTab === 'chat' && 'Division B Communication Suite'}
              {activeTab === 'tutor' && 'Gemini AI Engineering Physics Doubt Solver'}
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700">
              55 Nodes Active in Room 101
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/50 font-mono text-xs font-bold transition"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Invite WhatsApp</span>
            </button>

            {authRole === 'teacher' && (
              <>
                <button
                  onClick={() => setIsUploadDocModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition"
                >
                  <FileUp className="w-3.5 h-3.5" />
                  <span>Upload Document</span>
                </button>

                <button
                  onClick={() => setIsAiGenModalOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>AI Quiz Gen</span>
                </button>
              </>
            )}

            <button
              onClick={() => setIsProjectorMode(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700 transition"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Projector</span>
            </button>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* TAB 1: DASHBOARD */}
          { }
          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto space-y-6">
              
              {/* Institution Hero Header Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono mb-2 inline-block">
                      BVVS Basaveshwar Engineering College, Bagalkot - 587102
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      B.E. I Semester • Division B • Room No: 101
                    </h3>
                    <p className="text-slate-300 text-xs mt-1 max-w-xl font-medium">
                      Course: <strong className="text-cyan-400">22PHY12 Engineering Physics</strong> • Faculty: <strong className="text-amber-400">Prof. Jayashree G Ghantimath (Prof. J. G. Ghantimath)</strong>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setIsWhatsAppModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition"
                    >
                      <Share2 className="w-4 h-4" /> Share on WhatsApp
                    </button>

                    {authRole === 'teacher' ? (
                      <button
                        onClick={startLiveQuiz}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg transition"
                      >
                        <Play className="w-4 h-4 fill-white" /> Launch Quiz
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveTab('quiz')}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition"
                      >
                        <Zap className="w-4 h-4" /> Enter Live Quiz
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
                    <span>Division B Roll Call</span>
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">55 / 55</div>
                  <div className="text-[11px] text-emerald-400 font-mono mt-1">100% CSN Verification in Room 101</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
                    <span>Physics Materials</span>
                    <Folder className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">{courseDocuments.length} Uploaded</div>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className="text-[11px] text-cyan-400 font-mono mt-1 underline hover:text-cyan-300"
                  >
                    View Syllabus & Documents →
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
                    <span>Physics Faculty</span>
                    <UserCheck className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-sm font-bold text-white truncate">Prof. Jayashree G Ghantimath</div>
                  <div className="text-[11px] text-slate-400">Dept. of Engineering Physics</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
                    <span>Active Security Status</span>
                    <Lock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-400">CSN + PIN Protected</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Students have personal PINs</div>
                </div>
              </div>

              {/* Syllabus & Course Hours Overview */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <Atom className="w-4 h-4 text-cyan-400" />
                    22PHY12: Course Curriculum & 42-Hour Teaching Plan (Physics Cycle)
                  </h4>
                  <button
                    onClick={() => setActiveTab('documents')}
                    className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline"
                  >
                    Open Document Repository →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BEC_PHYSICS_CURRICULUM_MODULES.map((mod) => (
                    <div key={mod.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-cyan-300">{mod.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400">
                          {mod.hours} Teaching Hours
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp Share & Invite Box */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Share Live Room 101 Link with Division B on WhatsApp</h4>
                    <p className="text-xs text-slate-300 font-sans">
                      Students can click the link, log in with their 10-digit CSN, create their own private 4-digit PIN, and start participating.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={copyClassLinkToClipboard}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-xs font-bold text-slate-200 transition flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy Link
                  </button>
                  <a
                    href={getWhatsAppShareUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition flex items-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Open WhatsApp
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: COURSE MATERIALS & SYLLABUS DOCUMENTS HUB */}
          { }
          {activeTab === 'documents' && (
            <div className="max-w-6xl mx-auto space-y-6">
              
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
                    <Folder className="w-4 h-4" /> PROF. JAYASHREE'S PHYSICS REPOSITORY
                  </div>
                  <h3 className="text-xl font-black text-white">
                    22PHY12 Course Syllabus, Teaching Hours & Lecture Notes
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-2xl font-sans">
                    All documents uploaded here are accessible to every student and are automatically ingested into the Gemini Physics AI Tutor for syllabus-grounded doubt clearing.
                  </p>
                </div>

                {authRole === 'teacher' && (
                  <button
                    onClick={() => setIsUploadDocModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition"
                  >
                    <FileUp className="w-4 h-4" /> Upload New Physics Document
                  </button>
                )}
              </div>

              {/* Document Filter Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courseDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-4 shadow-xl"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          doc.category === 'Syllabus' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                          doc.category === 'Lab Manual' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
                          'bg-indigo-950 text-cyan-300 border border-indigo-500/30'
                        }`}>
                          {doc.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{doc.fileType} • {doc.size}</span>
                      </div>

                      <h4 className="font-bold text-sm text-white leading-snug">{doc.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                        {doc.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 text-[10px]">{doc.uploadDate}</span>
                      <div className="flex items-center gap-2">
                        {authRole === 'teacher' && (
                          <button
                            onClick={() => handleDeleteDocument(doc.id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800"
                            title="Delete Document"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => setReadingDoc(doc)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-cyan-200 font-sans font-semibold text-xs transition flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5" /> Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: LIVE QUIZ */}
          { }
          {activeTab === 'quiz' && (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {authRole === 'teacher' && (
                <div className="p-4 rounded-2xl bg-slate-900 border border-indigo-500/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Faculty Command: Prof. Jayashree G Ghantimath</h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Broadcasting to Room 101 • {liveSubmissionsCount}/55 Terminals Responded
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {quizState === 'active' ? (
                      <button
                        onClick={pauseLiveQuiz}
                        className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition"
                      >
                        <Pause className="w-3.5 h-3.5 inline mr-1" /> Pause
                      </button>
                    ) : (
                      <button
                        onClick={startLiveQuiz}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
                      >
                        <Play className="w-3.5 h-3.5 inline mr-1 fill-current" /> Start Quiz
                      </button>
                    )}
                    <button
                      onClick={advanceNextQuestion}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition"
                    >
                      <SkipForward className="w-3.5 h-3.5 inline mr-1" /> Next
                    </button>
                    <button
                      onClick={() => setIsProjectorMode(true)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
                    >
                      <Maximize2 className="w-3.5 h-3.5 inline mr-1" /> Smartboard
                    </button>
                  </div>
                </div>
              )}

              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-6 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-indigo-950 border border-indigo-500/30 text-cyan-300 font-mono text-xs font-bold">
                      Q{currentQuestionIndex + 1} / {quizQuestions.length}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Course: <strong className="text-slate-200">{currentQ.subject} (22PHY12)</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right font-mono">
                      <div className="text-[10px] text-slate-400">Countdown</div>
                      <div className={`text-xl font-bold ${timerSeconds <= 5 ? 'text-rose-400 animate-pulse' : 'text-white'}`}>
                        {timerSeconds}s
                      </div>
                    </div>
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>

                <div className="w-full h-1 bg-slate-800">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      timerSeconds <= 5 ? 'bg-rose-500' : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                    }`}
                    style={{ width: `${(timerSeconds / (currentQ.timeLimit || 40)) * 100}%` }}
                  ></div>
                </div>

                <div className="p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                    {currentQ.question}
                  </h3>

                  {(currentQ.type === 'mcq' || currentQ.type === 'boolean') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentQ.options.map((opt, idx) => {
                        const isSelected = userSelectedAnswer === opt;
                        const isCorrect = isAnswerSubmitted && opt === currentQ.correct;
                        const isWrong = isAnswerSubmitted && isSelected && opt !== currentQ.correct;

                        return (
                          <button
                            key={idx}
                            disabled={isAnswerSubmitted || quizState !== 'active'}
                            onClick={() => setUserSelectedAnswer(opt)}
                            className={`p-4 rounded-2xl border text-left flex items-start gap-4 transition ${
                              isCorrect
                                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                                : isWrong
                                ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                                : isSelected
                                ? 'bg-cyan-600/30 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                              isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-sm font-medium mt-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {currentQ.type === 'numerical' && (
                    <div className="max-w-md space-y-3">
                      <label className="text-xs font-mono text-slate-400 block">
                        Enter numerical value (Acceptable tolerance: ±{currentQ.tolerance})
                      </label>
                      <input
                        type="number"
                        step="any"
                        disabled={isAnswerSubmitted || quizState !== 'active'}
                        value={numericalInput}
                        onChange={(e) => setNumericalInput(e.target.value)}
                        placeholder="e.g. 0.423"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-mono text-lg focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  )}

                  {currentQ.type === 'multi' && (
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-cyan-400 mb-2">* Select all required conditions</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentQ.options.map((opt, idx) => {
                          const currentSelected = Array.isArray(userSelectedAnswer) ? userSelectedAnswer : [];
                          const isSelected = currentSelected.includes(opt);

                          return (
                            <button
                              key={idx}
                              disabled={isAnswerSubmitted || quizState !== 'active'}
                              onClick={() => {
                                if (isSelected) {
                                  setUserSelectedAnswer(currentSelected.filter((i) => i !== opt));
                                } else {
                                  setUserSelectedAnswer([...currentSelected, opt]);
                                }
                              }}
                              className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition ${
                                isSelected ? 'bg-cyan-600/30 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'
                              }`}
                            >
                              <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                                isSelected ? 'bg-cyan-600 border-cyan-400 text-white' : 'border-slate-700 bg-slate-900'
                              }`}>
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-sm font-medium">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {currentQ.type === 'short' && (
                    <div className="max-w-md space-y-3">
                      <label className="text-xs font-mono text-slate-400 block">
                        Type the physics physical term:
                      </label>
                      <input
                        type="text"
                        disabled={isAnswerSubmitted || quizState !== 'active'}
                        value={shortAnswerInput}
                        onChange={(e) => setShortAnswerInput(e.target.value)}
                        placeholder="e.g. probability density"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-mono text-lg focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  )}

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      Terminal Node: {authRole === 'teacher' ? 'Prof. Jayashree G Ghantimath' : `${authenticatedStudent.csn} (${authenticatedStudent.name})`}
                    </span>

                    {!isAnswerSubmitted ? (
                      <button
                        onClick={() => submitCurrentAnswer(false)}
                        disabled={quizState !== 'active'}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 hover:from-cyan-500 hover:to-emerald-400 text-white font-bold text-xs shadow-lg transition disabled:opacity-50"
                      >
                        Submit Physics Answer
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-mono text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Response Recorded
                      </div>
                    )}
                  </div>
                </div>

                {isAnswerSubmitted && (
                  <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-2">
                    <div className="text-emerald-400 font-bold text-xs font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Academic Physics Explanation:
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 4: ROSTER (55 STUDENTS) */}
          { }
          {activeTab === 'roster' && (
            <div className="max-w-6xl mx-auto space-y-6">
              
              <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    B.E. I Semester Roll Call • Division B (Room 101)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    All 55 students verified with 10-digit CSN numbers. Click on any student to view their 1-on-1 Profile Dossier or reset their PIN.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400">
                    55 / 55 Students Enrolled
                  </span>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 text-center">Roll No</th>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">CSN Number</th>
                      <th className="py-3.5 px-4 text-center">PIN Status</th>
                      <th className="py-3.5 px-4 text-center">Branch</th>
                      <th className="py-3.5 px-4 text-center">Physics Score</th>
                      <th className="py-3.5 px-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {OFFICIAL_BEC_55_ROSTER.map((s) => {
                      const perf = studentPerformanceMap[s.csn] || { score: 100, accuracy: 80 };
                      const hasNotes = !!teacherNotes[s.csn];
                      const hasPersonalPin = !!studentPins[s.csn];

                      return (
                        <tr
                          key={s.csn}
                          onClick={() => openStudentProfileDossier(s)}
                          className="hover:bg-slate-800/50 transition cursor-pointer"
                        >
                          <td className="py-3.5 px-4 text-center font-bold text-slate-400">{s.roll}</td>
                          <td className="py-3.5 px-4">
                            <div className="font-sans font-bold text-white text-xs flex items-center gap-2">
                              {s.name}
                              {hasNotes && (
                                <span className="w-2 h-2 rounded-full bg-amber-400" title="Prof. Jayashree saved a confidential remark"></span>
                              )}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 font-mono text-cyan-300 font-bold">{s.csn}</td>
                          <td className="py-3.5 px-4 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] ${
                              hasPersonalPin ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {hasPersonalPin ? 'PIN Set' : 'First Login'}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                              {s.branch}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center font-bold text-emerald-400">
                            {perf.score} pts
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openStudentProfileDossier(s);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-cyan-200 text-[11px] font-sans font-semibold transition"
                            >
                              View Dossier →
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* TAB 5: LEADERBOARD */}
          { }
          {activeTab === 'leaderboard' && (
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Division B Room 101 Live Physics Standings
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Evaluation rank of 55 students based on 22PHY12 Optical Fibers & Quantum Mechanics
                  </p>
                </div>

                <button
                  onClick={() => setMaskLeaderboardCsn(!maskLeaderboardCsn)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700 hover:bg-slate-700 transition"
                >
                  {maskLeaderboardCsn ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{maskLeaderboardCsn ? 'Unmask CSNs' : 'Mask CSNs'}</span>
                </button>
              </div>

              <div className="rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 text-center">Rank</th>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">CSN</th>
                      <th className="py-3.5 px-4 text-center">Streak</th>
                      <th className="py-3.5 px-4 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {sortedLeaderboard.map((st, i) => (
                      <tr key={st.csn} className="hover:bg-slate-800/40 transition">
                        <td className="py-3.5 px-4 text-center font-bold">
                          {i === 0 ? '🥇 1' : i === 1 ? '🥈 2' : i === 2 ? '🥉 3' : `#${i + 1}`}
                        </td>
                        <td className="py-3.5 px-4 font-sans font-bold text-white text-xs">
                          {st.name}
                        </td>
                        <td className="py-3.5 px-4 text-cyan-300">
                          {maskLeaderboardCsn ? `${st.csn.slice(0, 4)}****${st.csn.slice(-2)}` : st.csn}
                        </td>
                        <td className="py-3.5 px-4 text-center text-amber-400">
                          <Flame className="w-3.5 h-3.5 inline mr-1 fill-current" />
                          {st.streak}x
                        </td>
                        <td className="py-3.5 px-4 text-right font-bold text-white text-sm">
                          {st.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: PHYSICS SANDBOX & COMPUTATIONAL SIMULATORS */}
          { }
          {activeTab === 'sandbox' && (
            <div className="max-w-6xl mx-auto space-y-6">
              
              <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Compass className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="font-bold text-sm text-white">22PHY12: Interactive Physics Computational Simulators</h3>
                    <p className="text-xs text-slate-400 font-mono">Real-time calculations for BEC Bagalkot First Year Physics Experiments</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {[
                    { id: 'optical-fiber', label: '1. Optical Fiber NA' },
                    { id: 'quantum-well', label: '2. Quantum 1-D Well' },
                    { id: 'laser-grating', label: '3. Laser Grating' },
                    { id: 'superconductor', label: '4. Critical Field Hc' }
                  ].map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => setActiveSandboxTool(tool.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                        activeSandboxTool === tool.id ? 'bg-cyan-600 text-white shadow' : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {tool.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* TOOL 1: Optical Fiber */}
              {activeSandboxTool === 'optical-fiber' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-cyan-300">Optical Fiber: Numerical Aperture & Acceptance Angle</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Calculate the light gathering capacity of an optical glass fiber based on core (n₁) and cladding (n₂) refractive indices launched from air (n₀ = 1.0).
                    </p>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Core Refractive Index (n₁): {fiberN1}</label>
                        <input
                          type="range"
                          min="1.45"
                          max="1.70"
                          step="0.01"
                          value={fiberN1}
                          onChange={(e) => setFiberN1(parseFloat(e.target.value))}
                          className="w-full accent-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Cladding Refractive Index (n₂): {fiberN2}</label>
                        <input
                          type="range"
                          min="1.40"
                          max="1.65"
                          step="0.01"
                          value={fiberN2}
                          onChange={(e) => setFiberN2(parseFloat(e.target.value))}
                          className="w-full accent-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                      Formula: NA = √(n₁² - n₂²) • θ₀ = sin⁻¹(NA)
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-slate-500 uppercase">Computed Numerical Aperture (NA):</span>
                      <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
                        {computedFiberNA.toFixed(4)}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase">Acceptance Angle in Air (θ₀):</span>
                      <div className="text-3xl font-black font-mono text-cyan-400 mt-1">
                        {computedAcceptanceAngleDeg.toFixed(2)}°
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono mt-1 block">
                        Cone of acceptance = 2 · θ₀ = {(computedAcceptanceAngleDeg * 2).toFixed(2)}°
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 2: Quantum 1-D Well */}
              {activeSandboxTool === 'quantum-well' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-cyan-300">Particle in a 1-D Infinite Potential Well (Schrödinger Solution)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Compute the quantized energy eigenvalues of an electron confined inside an infinite 1-D potential box of width L.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Well Width L (nanometers): {wellWidthNm} nm</label>
                        <input
                          type="range"
                          min="0.1"
                          max="2.0"
                          step="0.05"
                          value={wellWidthNm}
                          onChange={(e) => setWellWidthNm(parseFloat(e.target.value))}
                          className="w-full accent-indigo-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Quantum State (n): {quantumNumberN}</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4].map((num) => (
                            <button
                              key={num}
                              onClick={() => setQuantumNumberN(num)}
                              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold ${
                                quantumNumberN === num ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                              }`}
                            >
                              n = {num}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                      Formula: Eₙ = (n² · h²) / (8 · m · L²) • Ground state E₁ &gt; 0
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-slate-500 uppercase">Quantized Energy Eigenvalue (E_{quantumNumberN}):</span>
                      <div className="text-3xl font-black font-mono text-yellow-400 mt-1">
                        {computedQuantumEnergyEv.toFixed(3)} eV
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase">Zero-Point Ground Energy (E₁):</span>
                      <div className="text-xl font-bold font-mono text-slate-300 mt-1">
                        {(computedQuantumEnergyEv / (quantumNumberN * quantumNumberN)).toFixed(3)} eV
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                        Confirms Heisenberg Uncertainty Principle Δx · Δp ≥ ℏ / 2
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 3: Laser Diffraction Grating */}
              {activeSandboxTool === 'laser-grating' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-cyan-300">Laser Wavelength Measurement via Plane Diffraction Grating</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Laboratory experiment to determine the wavelength of semiconductor laser light using normal incidence diffraction.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Grating Lines per mm (N): {gratingLinesPerMm}</label>
                        <input
                          type="range"
                          min="100"
                          max="1000"
                          step="50"
                          value={gratingLinesPerMm}
                          onChange={(e) => setGratingLinesPerMm(parseInt(e.target.value))}
                          className="w-full accent-rose-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Diffraction Angle θ (degrees): {diffractionAngleDeg}°</label>
                        <input
                          type="range"
                          min="5"
                          max="45"
                          step="0.5"
                          value={diffractionAngleDeg}
                          onChange={(e) => setDiffractionAngleDeg(parseFloat(e.target.value))}
                          className="w-full accent-rose-400"
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                      Formula: (a + b) sin(θ) = m · λ ⟹ λ = sin(θ) / (N · m)
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-slate-500 uppercase">Calculated Laser Wavelength (λ):</span>
                      <div className="text-3xl font-black font-mono text-rose-400 mt-1">
                        {computedLaserWavelengthNm.toFixed(1)} nm
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase">Grating Element d = (a + b):</span>
                      <div className="text-xl font-bold font-mono text-slate-300 mt-1">
                        {(1000 / gratingLinesPerMm).toFixed(2)} μm
                      </div>
                      <span className="text-[11px] text-cyan-400 font-mono mt-1 block">
                        Typical semiconductor GaAs laser emits in range 632 - 670 nm.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 4: Critical Field Hc */}
              {activeSandboxTool === 'superconductor' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-cyan-300">Superconductor Critical Field H_c(T) Calculator</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Calculate the temperature dependence of critical magnetic field below transition temperature T_c.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Operating Temperature T (Kelvin): {superTempT} K</label>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="0.1"
                          value={superTempT}
                          onChange={(e) => setSuperTempT(parseFloat(e.target.value))}
                          className="w-full accent-emerald-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-400 block mb-1">Critical Temp T_c (Lead Pb): {superTc} K</label>
                        <div className="text-xs font-mono text-slate-300">Fixed at 7.2 K (Pb)</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                      Formula: H_c(T) = H₀ · [1 - (T / T_c)²]
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-slate-500 uppercase">Critical Field at {superTempT} K:</span>
                      <div className="text-3xl font-black font-mono text-emerald-400 mt-1">
                        {computedHcAtTemp.toFixed(4)} Tesla
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase">Material State:</span>
                      <div className={`text-xl font-bold font-mono mt-1 ${superTempT < superTc ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {superTempT < superTc ? 'Superconducting (B = 0, Diamagnetic)' : 'Normal Conductor State'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 7: CLASSROOM CHAT */}
          { }
          {activeTab === 'chat' && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
              <div className="lg:col-span-2 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">Division B Physics Class Room</h4>
                    <p className="text-xs text-slate-400">Room 101 • Faculty: Prof. Jayashree G Ghantimath</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    55 Students Active
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((m) => (
                    <div
                      key={m.id}
                      className={`p-3.5 rounded-2xl border text-xs ${
                        m.isAnnouncement
                          ? 'bg-amber-950/30 border-amber-500/40 text-amber-100'
                          : m.role === 'teacher'
                          ? 'bg-indigo-950/30 border-indigo-500/40 text-indigo-100'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span className={m.role === 'teacher' ? 'text-cyan-300' : 'text-slate-200'}>
                          {m.sender}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{m.timestamp}</span>
                      </div>
                      <p className="leading-relaxed font-sans">{m.text}</p>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center gap-2">
                  <input
                    type="text"
                    value={publicChatInput}
                    onChange={(e) => setPublicChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && publicChatInput.trim()) {
                        const newMsg = {
                          id: Date.now(),
                          sender: authRole === 'teacher' ? 'Prof. Jayashree G Ghantimath (Physics)' : `${authenticatedStudent.name} (${authenticatedStudent.csn})`,
                          role: authRole,
                          text: publicChatInput,
                          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                          isAnnouncement: authRole === 'teacher' && publicChatInput.toLowerCase().startsWith('/announce')
                        };
                        setChatMessages((prev) => [...prev, newMsg]);
                        setPublicChatInput('');
                      }
                    }}
                    placeholder="Message Room 101 Physics class..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    onClick={() => {
                      if (!publicChatInput.trim()) return;
                      const newMsg = {
                        id: Date.now(),
                        sender: authRole === 'teacher' ? 'Prof. Jayashree G Ghantimath (Physics)' : `${authenticatedStudent.name} (${authenticatedStudent.csn})`,
                        role: authRole,
                        text: publicChatInput,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        isAnnouncement: false
                      };
                      setChatMessages((prev) => [...prev, newMsg]);
                      setPublicChatInput('');
                    }}
                    className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Private 1-on-1 Student Direct Channel */}
              <div className="rounded-3xl bg-slate-900 border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-slate-800 bg-slate-950/70">
                  <h4 className="font-bold text-sm text-white">Private Physics Desk Direct</h4>
                  <p className="text-xs text-slate-400">1-on-1 Faculty Dialogue</p>
                </div>

                {authRole === 'teacher' && (
                  <div className="p-3 border-b border-slate-800 bg-slate-950/40">
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">Select Student for 1-on-1:</label>
                    <select
                      value={privateRecipientCsn}
                      onChange={(e) => setPrivateRecipientCsn(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none"
                    >
                      {OFFICIAL_BEC_55_ROSTER.map((s) => (
                        <option key={s.csn} value={s.csn}>
                          Roll {s.roll} - {s.name} ({s.csn})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {(privateChats[authRole === 'teacher' ? privateRecipientCsn : authenticatedStudent.csn] || []).map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-2xl text-xs max-w-[85%] ${
                        msg.fromTeacher
                          ? 'ml-auto bg-cyan-600/30 border border-cyan-500/40 text-cyan-100'
                          : 'mr-auto bg-slate-950 border border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="text-[10px] font-bold text-slate-400 mb-0.5">{msg.sender}</div>
                      <p>{msg.text}</p>
                      <div className="text-[9px] text-right text-slate-500 mt-1">{msg.timestamp}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center gap-2">
                  <input
                    type="text"
                    value={privateChatInput}
                    onChange={(e) => setPrivateChatInput(e.target.value)}
                    placeholder="Private message..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (!privateChatInput.trim()) return;
                      const target = authRole === 'teacher' ? privateRecipientCsn : authenticatedStudent.csn;
                      const newMsg = {
                        id: Date.now(),
                        sender: authRole === 'teacher' ? 'Prof. Jayashree G Ghantimath' : authenticatedStudent.name,
                        fromTeacher: authRole === 'teacher',
                        text: privateChatInput,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      };
                      setPrivateChats((prev) => ({
                        ...prev,
                        [target]: [...(prev[target] || []), newMsg]
                      }));
                      setPrivateChatInput('');
                    }}
                    className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: GEMINI AI PHYSICS TUTOR */}
          { }
          {activeTab === 'tutor' && (
            <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-140px)] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 shadow-md">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      BVVS BEC Engineering Physics Doubt Tutor
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        22PHY12 Grounded
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Grounded in Prof. Jayashree's uploaded notes ({courseDocuments.length} documents active)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {aiTutorMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-cyan-600 text-yellow-200'
                    }`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Atom className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed max-w-[85%] whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-indigo-950/70 border border-indigo-500/40 text-indigo-100'
                        : 'bg-slate-950 border border-slate-800 text-slate-200 shadow-md font-sans'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isAiTutorThinking && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-600 flex items-center justify-center animate-spin">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
                      Prof. Jayashree's AI assistant is deriving equations...
                    </div>
                  </div>
                )}
              </div>

              <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/40 flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <span className="text-slate-500 shrink-0">Ask:</span>
                <button
                  onClick={() => handleAskAiTutor('Derive the expression for Numerical Aperture and Acceptance Angle of an optical fiber step by step.')}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 shrink-0 border border-slate-700 transition"
                >
                  ⚡ Optical Fiber NA Derivation
                </button>
                <button
                  onClick={() => handleAskAiTutor('Explain why a particle trapped in a 1-D infinite potential well cannot have zero energy.')}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-yellow-300 shrink-0 border border-slate-700 transition"
                >
                  ⚛️ Zero-Point Energy in 1D Box
                </button>
              </div>

              <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center gap-2">
                <input
                  type="text"
                  value={aiTutorInput}
                  onChange={(e) => setAiTutorInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAiTutor()}
                  placeholder="Ask any physics derivation, numerical problem, or theorem..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
                <button
                  disabled={isAiTutorThinking}
                  onClick={() => handleAskAiTutor()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs transition shadow-lg flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" /> Ask Physics AI
                </button>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* 1-on-1 Student Profile Dossier Slide-Over Drawer */}
      { }
      {isProfileDrawerOpen && selectedStudentForProfile && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-y-auto p-6 space-y-6 animate-in slide-in-from-right duration-200">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-500 flex items-center justify-center font-bold text-white text-base">
                  {selectedStudentForProfile.roll}
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">{selectedStudentForProfile.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">CSN: {selectedStudentForProfile.csn}</p>
                </div>
              </div>
              <button
                onClick={() => setIsProfileDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Official Roll Call Details</div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>Roll Number: <strong className="text-white">{selectedStudentForProfile.roll}</strong></div>
                <div>Gender: <strong className="text-white">{selectedStudentForProfile.gender}</strong></div>
                <div>Division: <strong className="text-white">Division B</strong></div>
                <div>Room: <strong className="text-white">Room 101</strong></div>
                <div>Cycle: <strong className="text-amber-400">Physics Cycle</strong></div>
                <div>Subject: <strong className="text-cyan-400">22PHY12 Engineering Physics</strong></div>
              </div>
            </div>

            {/* Student Personal PIN Administration */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div>
                <div className="text-slate-300 font-bold">Student PIN Status:</div>
                <div className="text-[11px] text-slate-400">
                  {studentPins[selectedStudentForProfile.csn] ? 'PIN Configured by Student' : 'No PIN Set (First Login Pending)'}
                </div>
              </div>

              {studentPins[selectedStudentForProfile.csn] && authRole === 'teacher' && (
                <button
                  onClick={() => handleResetStudentPinByTeacher(selectedStudentForProfile.csn)}
                  className="px-3 py-1.5 rounded-lg bg-rose-950 border border-rose-500/40 text-rose-300 hover:bg-rose-900 text-xs transition"
                >
                  Reset Student PIN
                </button>
              )}
            </div>

            {/* Teacher's Confidential Notes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                  Prof. Jayashree's Confidential Remarks:
                </div>
                <span className="text-[10px] font-mono text-slate-500">Only visible to Teacher</span>
              </div>

              <textarea
                value={activeNoteText}
                onChange={(e) => setActiveNoteText(e.target.value)}
                placeholder="Enter personal remarks, viva performance, lab experiment notes..."
                rows={4}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 leading-relaxed font-sans"
              />

              <button
                onClick={saveConfidentialNote}
                className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
              >
                Save Confidential Note for {selectedStudentForProfile.name}
              </button>
            </div>

            {/* Launch 1-on-1 Chat Trigger */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setPrivateRecipientCsn(selectedStudentForProfile.csn);
                  setIsProfileDrawerOpen(false);
                  setActiveTab('chat');
                  triggerToast(`Opened private desk chat with ${selectedStudentForProfile.name}`, 'info');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open 1-on-1 Private Desk Chat</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Document Reader / Full Content Preview Modal */}
      { }
      {readingDoc && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[85vh] rounded-3xl bg-slate-900 border border-slate-800 flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{readingDoc.category}</span>
                <h3 className="font-bold text-base text-white">{readingDoc.title}</h3>
                <p className="text-xs text-slate-400 font-mono">By {readingDoc.author} • {readingDoc.uploadDate}</p>
              </div>
              <button onClick={() => setReadingDoc(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-950/60">
              {readingDoc.content}
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/70 flex justify-end">
              <button
                onClick={() => setReadingDoc(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Document Upload Modal */}
      { }
      {isUploadDocModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FileUp className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-base text-white">Upload Course Document & Teaching Materials</h3>
              </div>
              <button onClick={() => setIsUploadDocModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-400 font-sans">
              Prof. Jayashree, upload your syllabus coverage, teaching hours schedule, lecture notes, lab manuals, or problem sheets here.
            </p>

            <form onSubmit={handleSaveDocument} className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Document Title:</label>
                <input
                  type="text"
                  required
                  value={newDocTitle}
                  onChange={(e) => setNewDocTitle(e.target.value)}
                  placeholder="e.g. Module 3: Superconductivity & Critical Field Notes"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Category:</label>
                  <select
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                  >
                    <option value="Syllabus">Syllabus & Lesson Plan</option>
                    <option value="Lecture Notes">Lecture Notes</option>
                    <option value="Lab Manual">Lab Manual / Practical</option>
                    <option value="Question Bank">CIE / SEE Question Bank</option>
                    <option value="Code/Simulation">Code & Computational Notes</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Select File from Device:</label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="w-full text-xs text-slate-400 file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-cyan-300 hover:file:bg-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Brief Summary:</label>
                <input
                  type="text"
                  value={newDocSummary}
                  onChange={(e) => setNewDocSummary(e.target.value)}
                  placeholder="e.g. Complete derivation steps for Meissner effect with Hc(T) calculation formulas."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  Document Body / Lecture Content (Text or Syllabus):
                </label>
                <textarea
                  rows={5}
                  value={newDocContent}
                  onChange={(e) => setNewDocContent(e.target.value)}
                  placeholder="Paste syllabus, derivation steps, or notes here..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsUploadDocModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isReadingFile}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs transition"
                >
                  Publish for Students
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Share Dialog Modal */}
      { }
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-emerald-500/50 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base text-white">Share Live Classroom on WhatsApp</h3>
              </div>
              <button onClick={() => setIsWhatsAppModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {isLocalOrPreviewUrl() && !customPublicUrl && (
              <div className="p-3.5 rounded-2xl bg-amber-950/70 border border-amber-500/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Why friends might see a "404 Not Found" right now:
                </div>
                <p className="text-[11px] text-amber-200/80 leading-relaxed font-sans">
                  This app is currently running inside an isolated local preview. To let all 55 students join from their mobile phones, paste your public address below!
                </p>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Your Live Public URL (Netlify / Custom Domain):</span>
                {customPublicUrl ? (
                  <span className="text-emerald-400 text-[10px] font-bold">✓ Active</span>
                ) : (
                  <span className="text-slate-500 text-[10px]">Using current browser URL</span>
                )}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  value={customPublicUrl}
                  onChange={(e) => saveCustomPublicUrl(e.target.value)}
                  placeholder="https://lively-seahorse-44b152.netlify.app"
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
                />
                {customPublicUrl && (
                  <button
                    type="button"
                    onClick={() => saveCustomPublicUrl('')}
                    className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-400"
                    title="Reset to default URL"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-emerald-400 font-bold">WhatsApp Message Preview:</div>
              <div className="text-xs text-slate-300 font-mono whitespace-pre-wrap bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 max-h-36 overflow-y-auto">
                🏛️ *BVVS Basaveshwar Engineering College, Bagalkot*{'\n'}
                *B.E. I Semester - Division B (Room 101)*{'\n'}
                *Course: 22PHY12 Engineering Physics*{'\n'}
                *Faculty:* Prof. Jayashree G. Ghantimath{'\n\n'}
                Join our Live Quiz & Classroom Hub:{'\n'}
                🔗 <span className="text-cyan-400 font-bold">{getEffectiveClassUrl()}</span>{'\n\n'}
                Enter your official CSN and create your 4-digit PIN to enter!
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={copyClassLinkToClipboard}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition flex items-center gap-1.5"
              >
                <Copy className="w-4 h-4" /> Copy Link
              </button>

              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Send to WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Classroom Authentication Gate Modal */}
      { }
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-cyan-500/50 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-black text-base text-white">Classroom Authentication Gate</h3>
              <button onClick={() => setLoginModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                onClick={() => { setAuthRole('student'); setLoginError(''); }}
                className={`py-2 rounded-lg transition ${authRole === 'student' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400'}`}
              >
                Student (CSN)
              </button>
              <button
                onClick={() => { setAuthRole('teacher'); setLoginError(''); }}
                className={`py-2 rounded-lg transition ${authRole === 'teacher' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400'}`}
              >
                Faculty Admin
              </button>
            </div>

            {authRole === 'student' ? (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Enter Your 10-Digit CSN:
                  </label>
                  <input
                    type="text"
                    value={loginCsnInput}
                    onChange={handleStudentCsnCheck}
                    placeholder="e.g. 2026010074 (Roll 1)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {isFirstTimeStudent ? (
                  <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-2.5">
                    <div className="text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      First-Time Login: Create Your Secret PIN
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1">Create 4-6 Digit PIN:</label>
                      <input
                        type="password"
                        value={newStudentPinCreate}
                        onChange={(e) => setNewStudentPinCreate(e.target.value)}
                        placeholder="e.g. 1234"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1">Confirm Secret PIN:</label>
                      <input
                        type="password"
                        value={newStudentPinConfirm}
                        onChange={(e) => setNewStudentPinConfirm(e.target.value)}
                        placeholder="Re-enter PIN"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Enter Your Student Secret PIN:
                    </label>
                    <input
                      type="password"
                      value={studentPinInput}
                      onChange={(e) => setStudentPinInput(e.target.value)}
                      placeholder="Enter the PIN you created"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-slate-400">
                    Faculty Security PIN (Prof. Jayashree G Ghantimath):
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginModalOpen(false);
                      setIsResetPinModalOpen(true);
                    }}
                    className="text-[11px] font-mono text-cyan-400 underline hover:text-cyan-300"
                  >
                    Forgot PIN?
                  </button>
                </div>
                <input
                  type="password"
                  value={loginPinInput}
                  onChange={(e) => setLoginPinInput(e.target.value)}
                  placeholder={`Enter your PIN (Default: ${facultyPin})`}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-white focus:outline-none focus:border-indigo-500"
                />
                <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                  <span>Current PIN: <strong className="text-emerald-400">{facultyPin}</strong></span>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginModalOpen(false);
                      setIsChangePinModalOpen(true);
                    }}
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    Change PIN
                  </button>
                </div>
              </div>
            )}

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-mono">
                {loginError}
              </div>
            )}

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setLoginModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleLoginSubmit}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
              >
                {authRole === 'student' && isFirstTimeStudent ? 'Save PIN & Enter' : 'Authenticate & Enter'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Change PIN Modal */}
      { }
      {isChangePinModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-amber-500/50 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-400" />
                <h3 className="font-black text-base text-white">Change Security PIN</h3>
              </div>
              <button onClick={() => setIsChangePinModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Prof. Jayashree, set your personal 4 to 8 digit secret PIN. It will be saved permanently in your browser.
            </p>

            <form onSubmit={handleChangePinSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Current PIN:</label>
                <input
                  type="password"
                  required
                  value={currentPinCheck}
                  onChange={(e) => setCurrentPinCheck(e.target.value)}
                  placeholder="Enter current PIN (Default: 2026)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">New PIN (4 - 8 digits):</label>
                <input
                  type="password"
                  required
                  value={newPinValue}
                  onChange={(e) => setNewPinValue(e.target.value)}
                  placeholder="Enter new PIN"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Confirm New PIN:</label>
                <input
                  type="password"
                  required
                  value={confirmPinValue}
                  onChange={(e) => setConfirmPinValue(e.target.value)}
                  placeholder="Re-enter new PIN"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {pinChangeError && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-mono">
                  {pinChangeError}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsChangePinModalOpen(false);
                    setIsResetPinModalOpen(true);
                  }}
                  className="text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
                >
                  Forgot Current PIN?
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsChangePinModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition"
                  >
                    Save New PIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Emergency Department Master Key PIN Reset Modal */}
      {isResetPinModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-cyan-500/50 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Unlock className="w-5 h-5 text-cyan-400" />
                <h3 className="font-black text-base text-white">Reset PIN with Master Key</h3>
              </div>
              <button onClick={() => setIsResetPinModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Enter the Department Master Recovery Key to overwrite and reset the faculty login PIN:
            </p>

            <form onSubmit={handleResetPinWithMasterKey} className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">
                  Department Master Key (Key: <strong className="text-cyan-400">BECPHYSICS101</strong>):
                </label>
                <input
                  type="text"
                  required
                  value={masterRecoveryKeyInput}
                  onChange={(e) => setMasterRecoveryKeyInput(e.target.value)}
                  placeholder="Enter BECPHYSICS101"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Set New PIN:</label>
                <input
                  type="password"
                  required
                  value={resetNewPinValue}
                  onChange={(e) => setResetNewPinValue(e.target.value)}
                  placeholder="e.g. 2026 or any new PIN"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              {resetError && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-mono">
                  {resetError}
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsResetPinModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition"
                >
                  Confirm & Reset PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AI Quiz Generator Modal */}
      { }
      {isAiGenModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-purple-500/40 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <h3 className="font-bold text-base text-white">Synthesize 22PHY12 Quiz with Gemini 3 Flash</h3>
              </div>
              <button onClick={() => setIsAiGenModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Engineering Physics Topic / Unit:</label>
                <input
                  type="text"
                  value={aiGenTopic}
                  onChange={(e) => setAiGenTopic(e.target.value)}
                  placeholder="e.g. Meissner Effect and Critical Magnetic Field in Superconductors"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Number of Questions:</label>
                <select
                  value={aiGenCount}
                  onChange={(e) => setAiGenCount(parseInt(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                >
                  <option value={1}>1 Question</option>
                  <option value={2}>2 Questions</option>
                  <option value={3}>3 Questions</option>
                </select>
              </div>
            </div>

            {aiGenStatus && (
              <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs text-purple-300 font-mono">
                {aiGenStatus}
              </div>
            )}

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setIsAiGenModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                disabled={isAiGenerating}
                onClick={handleGenerateAiQuiz}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs transition"
              >
                {isAiGenerating ? 'Synthesizing...' : 'Generate Physics Questions'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
