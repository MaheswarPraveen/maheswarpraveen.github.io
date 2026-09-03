// ==========================================================================
// MAHESWAR PRAVEEN — PROJECT DATASET & TECHNICAL DOSSIER
// ==========================================================================

export const personalInfo = {
  firstName: "Maheswar",
  lastName: "Praveen",
  name: "Maheswar Praveen",
  title: "BUILDER • ROBOTICS & AI ENGINEER",
  github: "https://github.com/MaheswarPraveen",
  linkedin: "https://www.linkedin.com/in/maheswarpraveen"
};

export const projects = [
  {
    id: "00",
    category: "PROFILE",
    title: "Autonomous Systems Builder",
    description: "Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",
    tags: ["ROS 2", "Edge AI", "Embedded Systems"]
  },
  {
    id: "01",
    category: "ROBOTICS",
    title: "SpotMicro Quadruped",
    description: "12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",
    tags: ["Zephyr RTOS", "Arduino UNO Q", "200Hz IK", "3S LiPo Busbar"]
  },
  {
    id: "02",
    category: "FIELD AI",
    title: "Autonomous Skid-Steer Rover",
    description: "Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",
    tags: ["ROS 2", "Hailo-8L NPU", "YOLO", "4-DOF Arm"]
  },
  {
    id: "03",
    category: "DRIVER ARCHITECTURE",
    title: "RoArm M2-S PlayMotion",
    description: "High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",
    tags: ["Quintic Splines", "Python Driver", "Waveshare Wiki"]
  },
  {
    id: "04",
    category: "TELEMETRY BRIDGE",
    title: "ArduROSPI Bridge",
    description: "Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",
    tags: ["pymavlink", "ROS 2", "ArduPilot"]
  },
  {
    id: "05",
    category: "INTERACTIVE SYSTEMS",
    title: "Kalkii Genesis",
    description: "Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",
    tags: ["Godot 4", "Combat State Machines", "GDScript"]
  },
  {
    id: "06",
    category: "EMBEDDED VISION",
    title: "Plant Disease Detection CNN",
    description: "End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",
    tags: ["TensorFlow", "OpenCV", "80% Test Accuracy"]
  }
];

export const technicalSkills = [
  {
    label: "Languages & AI",
    value: "Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"
  },
  {
    label: "Robotics & Protocols",
    value: "ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"
  },
  {
    label: "Hardware & Engineering",
    value: "Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"
  }
];
