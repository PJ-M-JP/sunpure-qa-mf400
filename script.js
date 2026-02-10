// 全局状态
let currentLang = 'zh'; // 语言：zh-中文，en-英文
let isLogin = false;    // 登录状态
const ADMIN_ACCOUNT = 'PJ123'; // 管理员账号
const ADMIN_PWD = 'PJ123';     // 管理员密码

// 完整Q&A数据
const qaData = [
    // 公司情况
    {
        category: "company",
        zh: {
            question: "你们总部在哪儿？在全球分别有多少个办公室？",
            answer: "公司总部在合肥，国内在上海、西安、北京都有办公室；海外区域总部在阿联酋迪拜，在沙特、印度、西班牙、智利等国设有办事处。"
        },
        en: {
            question: "Where are you headquartered? How many offices are there worldwide?",
            answer: "The company is headquartered in Hefei, with domestic offices in Shanghai, Xi'an, and Beijing; the overseas regional headquarters is in Dubai, UAE, with offices in Saudi Arabia, India, Spain, Chile and other countries."
        }
    },
    {
        category: "company",
        zh: {
            question: "你们在全球都有客户支持吗？",
            answer: "是的，我们在研发中心与制造中心在中国总部。同时，在全球各地办事处均有技术交付团队来支持。"
        },
        en: {
            question: "Do you have customer support worldwide?",
            answer: "Yes, our R&D center and manufacturing center are at our headquarters in China. At the same time, there are technical delivery teams in offices around the world to provide support."
        }
    },
    {
        category: "company",
        zh: {
            question: "你们的机器人在哪里组装？",
            answer: "机器人在交付前均已在中国合肥的工厂组装完毕。"
        },
        en: {
            question: "Where are your robots assembled?",
            answer: "The robots are fully assembled at our factory in Hefei, China before delivery."
        }
    },
    {
        category: "company",
        zh: {
            question: "你们在世界各地是否有储存备件的仓库？",
            answer: "目前除了国内之外，我们在印度和中东及北非地区有仓库，并计划在其他关键市场增加更多仓库。"
        },
        en: {
            question: "Do you have warehouses for storing spare parts around the world?",
            answer: "Currently, in addition to domestic warehouses, we have warehouses in India and the MENA region, and plan to add more warehouses in other key markets."
        }
    },
    {
        category: "company",
        zh: {
            question: "你们获得了哪些全球认证机构的认证？",
            answer: "质量相关：ISO 9001、ISO 14001、ISO 45001、ISO 12100；产品相关：TUV、CGC、CE等。"
        },
        en: {
            question: "Which global certification bodies have you obtained certifications from?",
            answer: "Quality related: ISO 9001, ISO 14001, ISO 45001, ISO 12100; Product related: TUV, CGC, CE, etc."
        }
    },
    {
        category: "company",
        zh: {
            question: "客户自己安装机器人吗？",
            answer: "两种选择：1、通常仁洁会派出工程师进行安装和调试指导，EPC在现场提供劳务团队，以优化成本并更好地配合项目进度（海外项目）。2、仁洁将派出整个团队（工程师和工人）进行安装和调试，这将单独报价。"
        },
        en: {
            question: "Do customers install the robots themselves?",
            answer: "Two options: 1. Usually, Renjie will send engineers to provide installation and commissioning guidance, and EPC will provide a labor team on site to optimize costs and better coordinate with project progress (overseas projects). 2. Renjie will send the entire team (engineers and workers) to carry out installation and commissioning, which will be quoted separately."
        }
    },
    {
        category: "company",
        zh: {
            question: "你们的产量如何？",
            answer: "干挂式机器人约300台/天。"
        },
        en: {
            question: "What is your production capacity?",
            answer: "About 300 units per day for the railed robot."
        }
    },
    {
        category: "company",
        zh: {
            question: "有实际应用案例吗？",
            answer: "截止目前，我们在23个国家有超过25GW的实际应用案例，签约机器人超过6万台。"
        },
        en: {
            question: "Do you have practical application cases?",
            answer: "Up to now, we have practical application cases of over 25GW in 23 countries, with more than 60,000 robots contracted."
        }
    },
    {
        category: "company",
        zh: {
            question: "全公司有多少人的规模？",
            answer: "300人左右，是中国清扫机器人中规模最大的公司。"
        },
        en: {
            question: "What is the size of the company's workforce?",
            answer: "About 300 people, making it the largest company in China's cleaning robot industry."
        }
    },
    {
        category: "company",
        zh: {
            question: "仁洁智能跟阳光电源是什么关系？",
            answer: "仁洁智能是阳光电源的第一家生态链企业。仁洁从2016年在阳光内部孵化，并于2019年独立运营。阳光向仁洁开放所有资源。站在阳光的基础上，仁洁发展迅速。我们的目标是成为全球领先的清洁能源领域机器人公司。（公开演讲时不要强调我们跟阳光的关系，更不能说我们是阳光子公司）"
        },
        en: {
            question: "What is the relationship between Renjie Intelligence and Sungrow?",
            answer: "Renjie Intelligence is the first eco-chain enterprise of Sungrow. Renjie was incubated within Sungrow in 2016 and operated independently in 2019. Sungrow opens all resources to Renjie. Standing on the basis of Sungrow, Renjie has developed rapidly. Our goal is to become a world-leading robot company in the field of clean energy. (Do not emphasize our relationship with Sungrow in public speeches, let alone say we are a Sungrow subsidiary)"
        }
    },
    // 产品性能
    {
        category: "product",
        zh: {
            question: "组件安装机器人是全自动的吗？",
            answer: "组件安装机器人在组件抓放、作业位移动等方面可以实现全自动。考虑与人工的协同作业，也支持人工遥控和自动行走间的模式切换。机器人移动到作业位、叉取组件包由人工远程遥控操作；机器人抓放组件以及在作业位间移动由机器人自主完成。"
        },
        en: {
            question: "Is the module installation robot fully automatic?",
            answer: "The module installation robot can achieve full automation in tasks such as module grasping and placement, and workstation movement. Considering collaborative work with humans, it also supports mode switching between manual remote control and automatic walking. The robot moving to the workstation and forking the module package are operated by manual remote control; the robot's grasping and placing of modules and movement between workstations are completed autonomously by the robot."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人的操作模式是什么？",
            answer: "机器人移动到作业位、叉取组件包由人工远程遥控操作；机器人抓放组件以及在作业位间移动由机器人自主完成，同时支持人工遥控和自动行走间的模式切换。"
        },
        en: {
            question: "What is the operating mode of the robot?",
            answer: "The robot moving to the workstation and forking the module package are operated by manual remote control; the robot's grasping and placing of modules and movement between workstations are completed autonomously by the robot, and it also supports mode switching between manual remote control and automatic walking."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人一次性能叉取多少组件？是否需要辅助叉车？",
            answer: "机器人集成叉车上料系统，可以实现自主上料，不需要辅助叉车。叉车上料系统载重可达1.5t，一次性可以叉取整包组件。"
        },
        en: {
            question: "How many modules can the robot fork at one time? Is an auxiliary forklift required?",
            answer: "The robot integrates a forklift loading system, which can achieve autonomous loading without the need for an auxiliary forklift. The forklift loading system can carry a load of up to 1.5t and can fork the entire module package at one time."
        }
    },
    {
        category: "product",
        zh: {
            question: "机械臂的臂展是多少？",
            answer: "我司机器人臂展3.9m，一台设备可兼容1P、2P平单轴与固定支架安装（可安装范围：固定支架下沿高度0.3m-1.8m，倾角25°-45°；平单轴檩条离地高度1.2-2.8m，排与排之间的间距≥5m）；目前大部分竞品臂展较短，只有2.7m，只能安装1P平单轴。"
        },
        en: {
            question: "What is the arm span of the robotic arm?",
            answer: "Our robot has an arm span of 3.9m, and one device can be compatible with 1P, 2P horizontal single-axis and fixed bracket installation (installation range: fixed bracket lower edge height 0.3m-1.8m, inclination angle 25°-45°; horizontal single-axis purlin height from ground 1.2-2.8m, spacing between rows ≥5m); most competing products currently have a shorter arm span of only 2.7m and can only install 1P horizontal single-axis."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人有检测障碍物的功能吗？",
            answer: "机身搭载360°人机安全自动防护功能，当检测到人员或障碍物靠近时（安全距离2m），无需物理接触即可触发安全机制。当检测到障碍物在危险范围内时（安全距离2m），设备会自动降低速度甚至紧急停机，同时发出声光报警提示，避免发生碰撞，全方位保障作业人员和机器安全。"
        },
        en: {
            question: "Does the robot have obstacle detection function?",
            answer: "The robot is equipped with a 360° human-machine safety automatic protection function. When a person or obstacle is detected approaching (safety distance 2m), the safety mechanism can be triggered without physical contact. When an obstacle is detected within the dangerous range (safety distance 2m), the device will automatically reduce speed or even emergency stop, and at the same time emit sound and light alarm prompts to avoid collisions, comprehensively ensuring the safety of operators and the machine."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人采用了哪些定位技术？",
            answer: "机器人搭载以激光雷达为核心、多传感器深度融合的高性能定位模组，通过激光点云匹配与IMU惯性数据紧耦合，实现实时厘米级定位精度，为机器人导航提供稳定可靠的全域位姿基准。"
        },
        en: {
            question: "What positioning technologies does the robot adopt?",
            answer: "The robot is equipped with a high-performance positioning module with lidar as the core and multi-sensor deep fusion. Through tight coupling of laser point cloud matching and IMU inertial data, real-time centimeter-level positioning accuracy is achieved, providing a stable and reliable global pose reference for robot navigation."
        }
    },
    {
        category: "product",
        zh: {
            question: "机械臂的安全作业半径是多少？",
            answer: "机械臂的安全作业半径为3.9m，与臂展一致，在该范围内可以进行安全的组件安装作业，同时设备的360°人机安全防护功能会在人员或障碍物进入2m安全距离时触发安全机制，保障作业安全。"
        },
        en: {
            question: "What is the safe working radius of the robotic arm?",
            answer: "The safe working radius of the robotic arm is 3.9m, which is consistent with the arm span. Within this range, safe module installation operations can be carried out. At the same time, the device's 360° human-machine safety protection function will trigger a safety mechanism when a person or obstacle enters the 2m safety distance to ensure operational safety."
        }
    },
    {
        category: "product",
        zh: {
            question: "吸盘的最大吸力是多少？",
            answer: "组件安装机器人搭载8个大吸力吸盘，总吸力超过6700N，在6级风状态下，仍有双倍吸力冗余。"
        },
        en: {
            question: "What is the maximum suction force of the suction cups?",
            answer: "The module installation robot is equipped with 8 large suction cups, with a total suction force of over 6700N. Even in level 6 wind conditions, there is still double suction redundancy."
        }
    },
    {
        category: "product",
        zh: {
            question: "每个小时能安装多少片组件？",
            answer: "60~100pcs/h，具体场景：1P平单轴场景搭配1个操作工+2个紧固工，每小时可以安装70pcs组件；2P固定支架场景搭配1个操作工+4个紧固工，每小时可以安装60pcs组件。"
        },
        en: {
            question: "How many modules can be installed per hour?",
            answer: "60~100pcs/h. Specific scenarios: 1P horizontal single-axis scenario with 1 operator + 2 fastening workers, can install 70pcs modules per hour; 2P fixed bracket scenario with 1 operator + 4 fastening workers, can install 60pcs modules per hour."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人的典型安装效率是多少？",
            answer: "平均51秒/块，每天可安装600-1000块组件，以700W组件测算，每天可安装约0.49MW。"
        },
        en: {
            question: "What is the typical installation efficiency of the robot?",
            answer: "An average of 51 seconds per module, 600-1000 modules can be installed per day. Calculated with 700W modules, about 0.49MW can be installed per day."
        }
    },
    {
        category: "product",
        zh: {
            question: "设备的功耗是多大，采用什么形式的供电方式？",
            answer: "机器人采用燃油混动系统，综合油耗为3.0L/h，一次加油可以续航7天（每天工作10h）。未来，机器人也规划纯电动力版本。"
        },
        en: {
            question: "What is the power consumption of the device and what form of power supply does it adopt?",
            answer: "The robot adopts a fuel hybrid system with a comprehensive fuel consumption of 3.0L/h, and can last for 7 days on a single refueling (working 10 hours a day). In the future, the robot also plans a pure electric version."
        }
    },
    {
        category: "product",
        zh: {
            question: "电池能续航多久，有提供配套的充电器吗？",
            answer: "机器人采用燃油混动系统，综合油耗是3L/h，可以续航7天（每天工作10h），无需充电器，加油即可续航。"
        },
        en: {
            question: "How long can the battery last, and is a matching charger provided?",
            answer: "The robot adopts a fuel hybrid system with a comprehensive fuel consumption of 3L/h, which can last for 7 days (working 10 hours a day). No charger is needed, just refuel to continue working."
        }
    },
    {
        category: "product",
        zh: {
            question: "部署方案需要发包方提供哪些输入资料？",
            answer: "电站图纸、支架图纸。"
        },
        en: {
            question: "What input materials does the deployment plan require from the employer?",
            answer: "Power station drawings, bracket drawings."
        }
    },
    {
        category: "product",
        zh: {
            question: "与人工安装相比，机器人的安装误差在什么范围？",
            answer: "位置精度为±5mm，对安装效果影响不大，在安装后人工微调即可进行紧固，待后续开发自动紧固功能后安装误差会进一步缩小。"
        },
        en: {
            question: "What is the installation error range of the robot compared to manual installation?",
            answer: "The position accuracy is ±5mm, which has little impact on the installation effect. After installation, manual fine-tuning can be performed for fastening. After the automatic fastening function is developed in the future, the installation error will be further reduced."
        }
    },
    {
        category: "product",
        zh: {
            question: "与安装孔间的精度误差是多少？",
            answer: "位置精度为±5mm。"
        },
        en: {
            question: "What is the accuracy error between installation holes?",
            answer: "The position accuracy is ±5mm."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人的整个工作流程是怎么样的？与人工安装有什么区别？",
            answer: "机器人安装流程：散料→拆包→叉车翻转机构上料→行走至作业位→人工放置特征物 →机械臂移动到拍照位拍照定位→机械臂抓取组件→机械臂移动到放置位→放板→机械臂回位→组件紧固。其中，散料拆包等需要人工完成；叉车翻转机构上料及翻转需要人工遥控；机器人行走、机械臂抓取与放置组件由机器人自主完成；放置特征块与组件紧固由人工完成（放置特征块人员为紧固人员）。与人工安装的区别：无需人工搬抬组件，大幅降低组件隐裂破损率；安装效率更高，平均51秒/块。"
        },
        en: {
            question: "What is the entire workflow of the robot? How is it different from manual installation?",
            answer: "Robot installation process: Bulk material → unpacking → forklift flipping mechanism loading → walking to workstation → manual placement of feature objects → robotic arm moving to photo position for photo positioning → robotic arm grasping module → robotic arm moving to placement position → placing board → robotic arm returning → module fastening. Among them, unpacking of bulk materials needs to be completed manually; loading and flipping of the forklift flipping mechanism requires manual remote control; robot walking and robotic arm grasping and placing modules are completed autonomously by the robot; placing feature blocks and module fastening are completed manually (the person placing the feature blocks is the fastening personnel). Differences from manual installation: No need for manual handling of modules, greatly reducing the hidden crack and damage rate of modules; higher installation efficiency, an average of 51 seconds per module."
        }
    },
    {
        category: "product",
        zh: {
            question: "机械臂如何实现组件抓取与放置？可以安装的组件类型有哪些？",
            answer: "机器人采用先进多传感器融合方案，通过人工智能算法精准识别组件的抓取位和放置位坐标，然后由机械臂和真空吸盘系统协同，在抓取位吸起组件、在放置位放置组件。机器人可以满足市场主流组件安装，包括无边框组件和双面组件。"
        },
        en: {
            question: "How does the robotic arm achieve module grasping and placement? What types of modules can be installed?",
            answer: "The robot adopts an advanced multi-sensor fusion scheme, and accurately identifies the coordinates of the grasping position and placement position of the module through artificial intelligence algorithms, and then the robotic arm and vacuum suction cup system cooperate to suck up the module at the grasping position and place the module at the placement position. The robot can meet the installation of mainstream modules in the market, including frameless modules and bifacial modules."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人在工作过程中需要几个人配合？",
            answer: "机器人作业需要1人操控机器、2-4人协同紧固组件，其中，1P平单轴场景一般需要2人配合紧固，2P固定支架场景一般需要4人配合紧固。具体需要根据项目条件而定。"
        },
        en: {
            question: "How many people are needed to cooperate with the robot during work?",
            answer: "Robot operation requires 1 person to operate the machine and 2-4 people to cooperate in fastening modules. Among them, the 1P horizontal single-axis scenario generally requires 2 people to cooperate in fastening, and the 2P fixed bracket scenario generally requires 4 people to cooperate in fastening. The specific requirements depend on the project conditions."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人在一个点位可以安装几块？",
            answer: "3-6块组件，以实际场景为准。"
        },
        en: {
            question: "How many modules can the robot install at one point?",
            answer: "3-6 modules, subject to the actual scenario."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人在安装前需要做什么准备？",
            answer: "机器人到场后，需要进行组装并进行视觉和机械臂的调试校准；在此之前，需要客户安排人员来我司进行操作人员培训，为期一周。"
        },
        en: {
            question: "What preparations are needed before the robot is installed?",
            answer: "After the robot arrives, it needs to be assembled and debugged and calibrated for vision and robotic arm; before that, the customer needs to arrange personnel to come to our company for operator training, which lasts for one week."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人如何补充光伏组件？",
            answer: "机器人集成叉车上料系统，人工遥控上料，无需搬抬，节省一台叉车与一名叉车司机。"
        },
        en: {
            question: "How does the robot replenish photovoltaic modules?",
            answer: "The robot integrates a forklift loading system, and manual remote control loading, no need for manual handling, saving one forklift and one forklift driver."
        }
    },
    {
        category: "product",
        zh: {
            question: "机器人工作时的行走速度是多少？转场时的行走速度是多少？",
            answer: "机器人在安装过程中的行走速度为1km/h，转场时的行走速度为2km/h。"
        },
        en: {
            question: "What is the walking speed of the robot when working? What is the walking speed when transitioning?",
            answer: "The walking speed of the robot during installation is 1km/h, and the walking speed during transition is 2km/h."
        }
    },
    {
        category: "product",
        zh: {
            question: "集中式电站区域较大，机器人行驶速度2km/h速度不足以快速到达组件存放区，速度是否可以调整？",
            answer: "机器人行走速度可调，目前行走速度2km/h可以满足安装需求，机器人在安装前已完成散料操作，机器人只需在安装目标区域移动，行走距离相对较短；在转场时有转运车辆，对安装效率无影响。"
        },
        en: {
            question: "The centralized power station has a large area, and the robot's traveling speed of 2km/h is not fast enough to reach the module storage area quickly. Can the speed be adjusted?",
            answer: "The robot's walking speed is adjustable. Currently, the walking speed of 2km/h can meet the installation requirements. The robot has completed the bulk material operation before installation, and the robot only needs to move in the installation target area, and the walking distance is relatively short; there are transfer vehicles during transition, which has no impact on installation efficiency."
        }
    },
    // 应用场景
    {
        category: "application",
        zh: {
            question: "如果组件安装过程中出现故障，如何保证组件安全？",
            answer: "在抓取或放置位有多个过渡点进行缓冲；吸盘末端有缓冲机构和断电保压功能，避免组件过载或因断电掉落；机器人抓取机构末端负载55kg，组件重量约35kg；吸盘系统配备8个大吸力吸盘，考虑6级风的状态下，仍留有两倍的安全余量，组件无掉落风险。"
        },
        en: {
            question: "If a fault occurs during module installation, how to ensure the safety of the module?",
            answer: "There are multiple transition points for buffering at the grasping or placement position; the end of the suction cup has a buffer mechanism and power-off pressure holding function to avoid module overload or falling due to power failure; the end load of the robot grasping mechanism is 55kg, and the module weight is about 35kg; the suction cup system is equipped with 8 large suction cups, considering the state of level 6 wind, there is still twice the safety margin, and there is no risk of module falling."
        }
    },
    {
        category: "application",
        zh: {
            question: "如何保证作业人员安全？",
            answer: "机身搭载360°人机安全主动防护功能，当检测到人员或障碍物靠近时，无需物理接触即可触发安全机制。当检测到障碍物在危险范围内时，设备会自动降低速度甚至紧急停机，同时发出声光报警提示，避免发生碰撞，全方位保障作业人员和机器安全。机器人作业侧安装2个100W的LED灯，夜间施工更安全。"
        },
        en: {
            question: "How to ensure the safety of operators?",
            answer: "The robot is equipped with a 360° human-machine safety active protection function. When a person or obstacle is detected approaching, the safety mechanism can be triggered without physical contact. When an obstacle is detected within the dangerous range, the device will automatically reduce speed or even emergency stop, and at the same time emit sound and light alarm prompts to avoid collisions, comprehensively ensuring the safety of operators and the machine. Two 100W LED lights are installed on the working side of the robot, making night construction safer."
        }
    },
    {
        category: "application",
        zh: {
            question: "这种机器人最大能适应多大的地面坡度？",
            answer: "机器人采用钢制履带底盘，爬坡能力30°（硬质地面），越障高度350mm，越沟宽度900mm，满足大多数地面条件。"
        },
        en: {
            question: "What is the maximum ground slope that this robot can adapt to?",
            answer: "The robot adopts a steel crawler chassis, with a climbing ability of 30° (hard ground), obstacle crossing height of 350mm, and ditch crossing width of 900mm, meeting most ground conditions."
        }
    },
    {
        category: "application",
        zh: {
            question: "这种设备要求排与排之间的最小距离是多少？",
            answer: "排与排之间的间距≥5m（针对平单轴场景），固定支架场景无明确最小排距要求，但需满足机器人臂展作业范围。"
        },
        en: {
            question: "What is the minimum distance between rows required for this equipment?",
            answer: "The spacing between rows is ≥5m (for horizontal single-axis scenarios). There is no clear minimum row spacing requirement for fixed bracket scenarios, but it needs to meet the robot's arm span operation range."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人如何应对复杂的地形？如斜坡、湿地、沟坑坎？",
            answer: "机器人采用钢制履带底盘，面对沙地泥地等不易陷入，爬坡能力30°（硬质地面），越障高度350mm，越沟宽度900mm，满足大多数地面条件。"
        },
        en: {
            question: "How does the robot deal with complex terrain? Such as slopes, wetlands, ditches and pits?",
            answer: "The robot adopts a steel crawler chassis, which is not easy to get stuck in sandy and muddy ground, has a climbing ability of 30° (hard ground), obstacle crossing height of 350mm, and ditch crossing width of 900mm, meeting most ground conditions."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人是否可以承受户外的恶劣环境？",
            answer: "机器人核心部件防护等级IP65，可在海拔4000米正常作业，工作温度为-20℃-55℃。机器人可以在恶劣环境下稳定作业。"
        },
        en: {
            question: "Can the robot withstand harsh outdoor environments?",
            answer: "The protection level of the robot's core components is IP65, which can operate normally at an altitude of 4000 meters, and the working temperature is -20℃-55℃. The robot can operate stably in harsh environments."
        }
    },
    {
        category: "application",
        zh: {
            question: "在天气、光线、沙尘等影响下如何保证相机定位/安装精度？",
            answer: "视觉系统配备先进的AI算法，可根据光线变化自动调整曝光参数、增益和对比度，有效应对强光、阴影或低光等光线条件。视觉系统具备防尘、防水能力，采用密封结构和光学滤镜，确保在沙尘等恶劣环境下仍能正常工作。"
        },
        en: {
            question: "How to ensure camera positioning/installation accuracy under the influence of weather, light, dust, etc.?",
            answer: "The vision system is equipped with advanced AI algorithms, which can automatically adjust exposure parameters, gain and contrast according to light changes, and effectively cope with light conditions such as strong light, shadow or low light. The vision system has dust and water resistance, and adopts a sealed structure and optical filter to ensure normal work in harsh environments such as dust."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人对使用场景有什么要求？例如安装的高度，角度等",
            answer: "固定支架下沿高度0.3m-1.8m，倾角25°-45°；平单轴檩条离地高度1.2-2.8m，排与排之间的间距≥5m。"
        },
        en: {
            question: "What requirements does the robot have for the usage scenario? Such as installation height, angle, etc.",
            answer: "The lower edge height of the fixed bracket is 0.3m-1.8m, and the inclination angle is 25°-45°; the height of the horizontal single-axis purlin from the ground is 1.2-2.8m, and the spacing between rows is ≥5m."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人目前是否已经投入使用？可以简单介绍一下你们光伏铺装机器人在项目上的应用情况吗？如项目参建方、规模等",
            answer: "目前我们的机器人已经在青海格尔木、宁夏宁东、内蒙古阿拉善、沙特Haden、青海共和等地进行了实证测试，累计安装组件接近100MW。"
        },
        en: {
            question: "Is the robot currently in use? Can you briefly introduce the application of your photovoltaic installation robot in the project? Such as project participants, scale, etc.",
            answer: "Currently, our robot has been tested in Golmud, Qinghai, Ningdong, Ningxia, Alxa, Inner Mongolia, Haden, Saudi Arabia, Gonghe, Qinghai and other places, with a cumulative installed capacity of nearly 100MW."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人能安装所有类型的组件吗？比如双玻？",
            answer: "机器人可以满足市场主流组件安装，包括无边框组件和双面组件（双玻组件），并与通威、隆基、晶科、晶澳等主流组件厂商开展匹配性测试并获得厂商的NOC函件。"
        },
        en: {
            question: "Can the robot install all types of modules? Such as double glass?",
            answer: "The robot can meet the installation of mainstream modules in the market, including frameless modules and bifacial modules (double glass modules), and has carried out compatibility tests with mainstream module manufacturers such as Tongwei, Longi, Jinko, JA Solar and obtained NOC letters from the manufacturers."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人最小和最大的安装高度是多少？",
            answer: "固定支架下沿高度0.3m-1.8m；平单轴檩条离地高度1.2-2.8m。"
        },
        en: {
            question: "What is the minimum and maximum installation height of the robot?",
            answer: "The lower edge height of the fixed bracket is 0.3m-1.8m; the height of the horizontal single-axis purlin from the ground is 1.2-2.8m."
        }
    },
    {
        category: "application",
        zh: {
            question: "设备最高能在多大的风速下运行？",
            answer: "机器人可在6级风速下正常工作，组件无掉落风险。"
        },
        en: {
            question: "What is the maximum wind speed that the equipment can operate in?",
            answer: "The robot can work normally under level 6 wind speed, and there is no risk of module falling."
        }
    },
    {
        category: "application",
        zh: {
            question: "组件安装机器人报错、报警机制是怎样的？",
            answer: "目前机器人报警通过手持遥控器进行常见故障与故障码报警，且可以在遥控器端进行快速清除并启动；如遇到清除不了的故障，需要查看设备的触摸屏进行详细查看处理故障指引再处理。"
        },
        en: {
            question: "What is the error and alarm mechanism of the module installation robot?",
            answer: "Currently, the robot alarm performs common fault and fault code alarm through the handheld remote control, and can be quickly cleared and started on the remote control end; if a fault that cannot be cleared is encountered, it is necessary to check the touch screen of the device to view the detailed troubleshooting guide before handling."
        }
    },
    {
        category: "application",
        zh: {
            question: "搬运组件时，吸盘系统如何不损坏组件？",
            answer: "吸盘系统共配备8个大吸力吸盘，在6级风状态时，仍有双倍的吸力冗余；真空吸附系统有断电保压和缓冲机构，在断电或过压等异常状态下，能够保证组件不损坏。"
        },
        en: {
            question: "When handling modules, how does the suction cup system not damage the modules?",
            answer: "The suction cup system is equipped with 8 large suction cups, which still have double suction redundancy in level 6 wind conditions; the vacuum adsorption system has a power-off pressure holding and buffer mechanism, which can ensure that the modules are not damaged in abnormal states such as power failure or overpressure."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人是否会造成组件隐裂？",
            answer: "1、组件倾斜放置；吸盘缓冲机构+断电保压功能；吸盘双倍安全冗余；累计安装超16万块组件无损伤。2、内部有完善的检测流程，连续抓放之后，组件检测无隐裂。3、与通威、隆基、晶科、晶澳等主流组件厂商开展匹配性测试并获得厂商的NOC函件。"
        },
        en: {
            question: "Will the robot cause hidden cracks in the modules?",
            answer: "1. The module is placed at an angle; suction cup buffer mechanism + power-off pressure holding function; double safety redundancy of suction cups; cumulative installation of more than 160,000 modules without damage. 2. There is a complete internal inspection process. After continuous grasping and placing, the module inspection shows no hidden cracks. 3. Carry out compatibility tests with mainstream module manufacturers such as Tongwei, Longi, Jinko, JA Solar and obtain NOC letters from the manufacturers."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人安装对支架有什么工艺要求？",
            answer: "固定支架：檩条放置到位，两端平齐；檩条与立柱的固定孔对齐。平单轴：檩条安装到位、两端平齐，所有檩条处于同一平面。若支架不符合要求，则需要额外人员进行支架调整。"
        },
        en: {
            question: "What are the process requirements for the bracket for robot installation?",
            answer: "Fixed bracket: the purlin is placed in place, and both ends are flush; the fixing holes of the purlin and the column are aligned. Horizontal single-axis: the purlin is installed in place, both ends are flush, and all purlins are in the same plane. If the bracket does not meet the requirements, additional personnel are needed to adjust the bracket."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人部署需要提供哪些项目资料？",
            answer: "电站图纸、支架图纸。"
        },
        en: {
            question: "What project materials are needed for robot deployment?",
            answer: "Power station drawings, bracket drawings."
        }
    },
    {
        category: "application",
        zh: {
            question: "机器人的生产周期多久？",
            answer: "订单下发后的生产周期约2个月。"
        },
        en: {
            question: "How long is the production cycle of the robot?",
            answer: "The production cycle after the order is issued is about 2 months."
        }
    },
    {
        category: "application",
        zh: {
            question: "使用机器人需要具备什么条件？",
            answer: "操作员约需1周左右培训，需要有操作证，在我司进行培训考核后颁发；同时需要提供电站图纸、支架图纸等项目资料，支架需满足安装工艺要求。"
        },
        en: {
            question: "What conditions are required to use the robot?",
            answer: "The operator needs about 1 week of training and needs to have an operation certificate, which is issued after training and assessment in our company; at the same time, project materials such as power station drawings and bracket drawings need to be provided, and the bracket needs to meet the installation process requirements."
        }
    },
    // 商务条款
    {
        category: "business",
        zh: {
            question: "材料介绍人工安装组件破损率高(破损3%,隐裂2%)数据是否有出处，若使用安装机器人能降低到什么程度？",
            answer: "组件安装破损率达3‰，组件隐裂率达到2‰以上（调研收集），使用组件安装机器人破损率≤0.1‰。"
        },
        en: {
            question: "Is there a source for the data that the damage rate of manually installed modules is high (3% damage, 2% hidden cracks)? To what extent can the damage rate be reduced by using the installation robot?",
            answer: "The module installation damage rate is 3‰, and the module hidden crack rate is more than 2‰ (collected through research). The damage rate is ≤0.1‰ when using the module installation robot."
        }
    },
    {
        category: "business",
        zh: {
            question: "使用机器人安装可以节省几人？",
            answer: "不同区域不同项目节省的人工不同，以中国区域200MW规模、100天工期项目为例，机器人安装可节省60余人。"
        },
        en: {
            question: "How many people can be saved by using the robot for installation?",
            answer: "The labor saved varies in different regions and projects. Taking a 200MW project in China with a 100-day construction period as an example, robot installation can save more than 60 people."
        }
    },
    {
        category: "business",
        zh: {
            question: "一天能安装多少MW，安装多少MW的组件可以回收成本？",
            answer: "以1P平单轴场景为例，组件安装机器人平均每天可安装700块组件，以700W组件测算，每天可安装约0.49MW。不同地区、不同项目回本周期不同，具体要根据实际进行测算。以中国区域200MW规模、100天工期项目为例，机器人安装相比全人工安装总成本降低50%以上，约完成3个相似项目即可回本。"
        },
        en: {
            question: "How many MW can be installed in a day, and how many MW of modules can be installed to recover the cost?",
            answer: "Taking the 1P horizontal single-axis scenario as an example, the module installation robot can install an average of 700 modules per day. Calculated with 700W modules, about 0.49MW can be installed per day. The payback period varies in different regions and projects, and specific calculations need to be made according to the actual situation. Taking a 200MW project in China with a 100-day construction period as an example, the total cost of robot installation is reduced by more than 50% compared to full manual installation, and the cost can be recovered after completing about 3 similar projects."
        }
    },
    {
        category: "business",
        zh: {
            question: "机器人售价多少？是否可以租赁？",
            answer: "组件安装机器人支持直接购买和租赁两种销售模式，其中，租赁仅在国内和中东区域支持。具体售价详询销售。"
        },
        en: {
            question: "What is the price of the robot? Is it available for rent?",
            answer: "The module installation robot supports two sales modes: direct purchase and lease. Among them, lease is only supported in China and the Middle East region. For specific prices, please consult the sales department."
        }
    },
    {
        category: "business",
        zh: {
            question: "如果提供服务，报价模式是怎么样的？",
            answer: "详询销售。"
        },
        en: {
            question: "If services are provided, what is the quotation model?",
            answer: "Please consult the sales department for details."
        }
    },
    {
        category: "business",
        zh: {
            question: "目前组件安装机器人的目标客户有哪些？目标市场是哪些区域？",
            answer: "目标客户：EPC、施工队等，主要市场：中国、中东、欧洲、澳洲、拉美等。"
        },
        en: {
            question: "Who are the target customers of the module installation robot currently? Which regions are the target markets?",
            answer: "Target customers: EPC, construction teams, etc. Main markets: China, Middle East, Europe, Australia, Latin America, etc."
        }
    },
    {
        category: "business",
        zh: {
            question: "机器人的运输方式？",
            answer: "采用高速救援车/平板车，集装箱进行运输。如果超高，则将机械臂拆下运输。"
        },
        en: {
            question: "What is the transportation method of the robot?",
            answer: "High-speed rescue vehicle/flatbed truck and container are used for transportation. If it is overheight, the robotic arm will be removed for transportation."
        }
    },
    {
        category: "business",
        zh: {
            question: "设备的故障率(或无故障运行时间)？",
            answer: "平均无故障运行时间>1000h。"
        },
        en: {
            question: "What is the failure rate (or mean time between failures) of the equipment?",
            answer: "Mean time between failures >1000h."
        }
    },
    {
        category: "business",
        zh: {
            question: "机器人运输时是怎么包装的？",
            answer: "机器人在运输时，会拆分成机体、机械臂、相机/吊具三大部分，会分别进行包装防护。"
        },
        en: {
            question: "How is the robot packaged during transportation?",
            answer: "During transportation, the robot will be split into three parts: the body, the robotic arm, and the camera/sling, which will be packaged and protected separately."
        }
    },
    {
        category: "business",
        zh: {
            question: "机器人如果在租赁期间出现故障怎么办？",
            answer: "机器人发运前，会购买相关保险。如果设备发生故障，我们提供运维手册及7*24小时在线服务，帮助客户可快速定位故障并解决。"
        },
        en: {
            question: "What should I do if the robot breaks down during the lease period?",
            answer: "Before the robot is shipped, relevant insurance will be purchased. If the equipment fails, we provide an operation and maintenance manual and 7*24-hour online service to help customers quickly locate and solve the fault."
        }
    },
    // 竞品相关
    {
        category: "competitor",
        zh: {
            question: "仁洁组件安装机器人与其他组件安装机器人有何不同？",
            answer: "更高效、更经济：仁洁单台机器人每天可安装600-1000块，大部分竞品安装效率约400块/天；仁洁机器人集成叉车自主上料系统，可节省叉车和一名叉车驾驶员，目前竞品需额外叉车上料。使用范围更广、适应性更强：单台机器可覆盖1P、2P平单轴与固定支架，目前大部分竞品只能安装1P平单轴；仁洁机器人支持螺栓与压块安装方式，可适应沙漠、草原、戈壁等地形（最大爬坡角度30°），部分竞品只能匹配压块安装方式，且爬坡角度15°。"
        },
        en: {
            question: "What is the difference between Renjie module installation robot and other module installation robots?",
            answer: "More efficient and economical: A single Renjie robot can install 600-1000 modules per day, while most competing products have an installation efficiency of about 400 modules per day; Renjie robot integrates a forklift autonomous loading system, which can save a forklift and a forklift driver, while current competing products require additional forklift loading. Wider range of use and stronger adaptability: A single machine can cover 1P, 2P horizontal single-axis and fixed brackets, while most competing products can only install 1P horizontal single-axis; Renjie robot supports bolt and pressure block installation methods, and can adapt to terrains such as deserts, grasslands, and Gobi (maximum climbing angle 30°), while some competing products can only match pressure block installation methods, and the climbing angle is 15°."
        }
    },
    {
        category: "competitor",
        zh: {
            question: "关于精度，客户对精度做出进一步的疑问，比如两个相邻组件的距离可能会在10mm，这样就需要人工进行调整；或者业主要求精度在±1mm",
            answer: "1. 当前精度水平与控制方式：基于我们的现场测试，机器人在标准操作条件下可保持典型的放置精度在±3mm范围内。该精度源于机械设计的重复定位精度和对齐传感器的闭环控制。2. ±1mm精度目标的技术挑战与实际应用范围：±1mm的精度要求对于现场光伏组件安装来说极为严格，因为地面不平整、安装支架的制造公差以及组件本身的尺寸公差等因素，通常会导致几毫米的偏差。行业普遍接受的安装公差为±3–5mm，在此范围内的偏差不会影响结构安全或发电效率。3. 10mm间隙需要人工调整的场景说明：在极少数情况下，如果局部累积误差导致两个相邻组件之间的间隙约为10mm，可能需要少量的人工微调。但这仅占项目总安装工作的极小部分，大多数组件安装仍由机器人高效且一致性良好地完成。4. 精度优化方案（可选）：设备的硬件和软件正在持续迭代升级，精度也在不断提高。"
        },
        en: {
            question: "Regarding precision, customers have further questions about precision, such as the distance between two adjacent modules may be 10mm, which requires manual adjustment; or the owner requires precision within ±1mm",
            answer: "1. Current precision level and control method: Based on our on-site tests, the robot can maintain a typical placement precision within ±3mm under standard operating conditions. This precision comes from the repeat positioning precision of the mechanical design and the closed-loop control of the alignment sensor. 2. Technical challenges and practical application scope of ±1mm precision target: The ±1mm precision requirement is extremely strict for on-site photovoltaic module installation, because factors such as uneven ground, manufacturing tolerances of installation brackets, and dimensional tolerances of the modules themselves usually lead to deviations of several millimeters. The generally accepted installation tolerance in the industry is ±3–5mm, and deviations within this range will not affect structural safety or power generation efficiency. 3. Description of the scenario where 10mm gap requires manual adjustment: In rare cases, if local cumulative error causes the gap between two adjacent modules to be about 10mm, a small amount of manual fine-tuning may be required. But this only accounts for a very small part of the total installation work of the project, and most module installations are still completed efficiently and consistently by the robot. 4. Precision optimization plan (optional): The hardware and software of the equipment are continuously iterated and upgraded, and the precision is also continuously improved."
        }
    }
];

// DOM元素
const searchInput = document.getElementById('search-input');
const langSwitch = document.getElementById('lang-switch');
const langText = document.getElementById('lang-text');
const addBtn = document.getElementById('add-btn');
const loginModal = document.getElementById('login-modal');
const loginContent = document.getElementById('login-content');
const closeLogin = document.getElementById('close-login');
const loginForm = document.getElementById('login-form');
const loginAccount = document.getElementById('login-account');
const loginPwd = document.getElementById('login-pwd');
const loginError = document.getElementById('login-error');
const addModal = document.getElementById('add-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const addForm = document.getElementById('add-form');
const newCategory = document.getElementById('new-category');
const newZhQuestion = document.getElementById('new-zh-question');
const newZhAnswer = document.getElementById('new-zh-answer');
const newEnQuestion = document.getElementById('new-en-question');
const newEnAnswer = document.getElementById('new-en-answer');
const cancelAdd = document.getElementById('cancel-add');
const qaList = document.getElementById('qa-list');
const emptyTip = document.getElementById('empty-tip');
const loading = document.getElementById('loading');
const categoryBtns = document.querySelectorAll('.category-btn');
const navbar = document.getElementById('navbar');

// 初始化页面
window.addEventListener('load', () => {
    // 隐藏加载提示
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 500);
    // 渲染Q&A列表
    renderQAList(qaData);
});

// 渲染Q&A列表
function renderQAList(data) {
    // 清空列表
    qaList.innerHTML = '';
    
    // 如果数据为空，显示空状态
    if (data.length === 0) {
        emptyTip.classList.remove('hidden');
        return;
    } else {
        emptyTip.classList.add('hidden');
    }

    // 遍历数据，创建卡片
    data.forEach(item => {
        const qaCard = document.createElement('div');
        qaCard.className = 'bg-white rounded-xl shadow-card p-4 card-hover';
        qaCard.setAttribute('data-category', item.category);

        // 获取当前语言的问题和答案
        const question = currentLang === 'zh' ? item.zh.question : item.en.question;
        const answer = currentLang === 'zh' ? item.zh.answer : item.en.answer;

        // 卡片内容
        qaCard.innerHTML = `
            <div class="flex justify-between items-start cursor-pointer qa-header">
                <h3 class="text-lg font-semibold text-neutral-700 flex-1">${question}</h3>
                <button class="qa-toggle text-neutral-400 hover:text-primary transition-all">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="qa-content mt-3 text-neutral-600 hidden">
                <p class="leading-relaxed">${answer}</p>
            </div>
        `;

        // 添加点击事件
        const qaHeader = qaCard.querySelector('.qa-header');
        const qaToggle = qaCard.querySelector('.qa-toggle');
        const qaContent = qaCard.querySelector('.qa-content');

        function toggleQA() {
            qaContent.classList.toggle('hidden');
            const icon = qaToggle.querySelector('i');
            if (qaContent.classList.contains('hidden')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        }

        qaHeader.addEventListener('click', toggleQA);
        qaToggle.addEventListener('click', toggleQA);

        // 添加到列表
        qaList.appendChild(qaCard);
    });
}

// 搜索功能
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    filterQAList(keyword);
});

// 分类筛选
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 切换活跃状态
        categoryBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
        categoryBtns.forEach(b => b.classList.add('bg-neutral-200', 'hover:bg-neutral-300'));
        btn.classList.add('active', 'bg-primary', 'text-white');
        btn.classList.remove('bg-neutral-200', 'hover:bg-neutral-300');

        const category = btn.getAttribute('data-category');
        filterQAList(searchInput.value.toLowerCase().trim(), category);
    });
});

// 筛选Q&A列表
function filterQAList(keyword = '', category = 'all') {
    let filteredData = qaData;

    // 分类筛选
    if (category !== 'all') {
        filteredData = filteredData.filter(item => item.category === category);
    }

    // 关键词筛选
    if (keyword) {
        filteredData = filteredData.filter(item => {
            const zhQuestion = item.zh.question.toLowerCase().includes(keyword);
            const zhAnswer = item.zh.answer.toLowerCase().includes(keyword);
            const enQuestion = item.en.question.toLowerCase().includes(keyword);
            const enAnswer = item.en.answer.toLowerCase().includes(keyword);
            return zhQuestion || zhAnswer || enQuestion || enAnswer;
        });
    }

    // 渲染筛选后的列表
    renderQAList(filteredData);
}

// 语言切换
langSwitch.addEventListener('click', () => {
    if (currentLang === 'zh') {
        currentLang = 'en';
        langText.textContent = 'English';
    } else {
        currentLang = 'zh';
        langText.textContent = '中文';
    }
    // 重新渲染列表
    filterQAList(searchInput.value.toLowerCase().trim(), getCurrentCategory());
});

// 获取当前选中的分类
function getCurrentCategory() {
    const activeBtn = document.querySelector('.category-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-category') : 'all';
}

// 新增Q&A按钮点击
addBtn.addEventListener('click', () => {
    if (!isLogin) {
        // 未登录，显示登录模态框
        showModal(loginModal, loginContent);
    } else {
        // 已登录，显示新增模态框
        showModal(addModal, modalContent);
    }
});

// 显示模态框
function showModal(modal, content) {
    modal.classList.remove('hidden');
    setTimeout(() => {
        content.classList.add('modal-fade-in');
        content.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

// 隐藏模态框
function hideModal(modal, content) {
    content.classList.remove('modal-fade-in');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// 关闭登录模态框
closeLogin.addEventListener('click', () => {
    hideModal(loginModal, loginContent);
    // 清空表单
    loginForm.reset();
    loginError.classList.add('hidden');
});

// 登录表单提交
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = loginAccount.value.trim();
    const pwd = loginPwd.value.trim();

    if (account === ADMIN_ACCOUNT && pwd === ADMIN_PWD) {
        // 登录成功
        isLogin = true;
        hideModal(loginModal, loginContent);
        // 显示新增模态框
        showModal(addModal, modalContent);
        // 清空登录表单
        loginForm.reset();
        loginError.classList.add('hidden');
    } else {
        // 登录失败
        loginError.classList.remove('hidden');
    }
});

// 关闭新增模态框
closeModal.addEventListener('click', () => {
    hideModal(addModal, modalContent);
    // 清空表单
    addForm.reset();
});

// 取消新增
cancelAdd.addEventListener('click', () => {
    hideModal(addModal, modalContent);
    // 清空表单
    addForm.reset();
});

// 新增表单提交
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = newCategory.value;
    const zhQuestion = newZhQuestion.value.trim();
    const zhAnswer = newZhAnswer.value.trim();
    const enQuestion = newEnQuestion.value.trim();
    const enAnswer = newEnAnswer.value.trim();

    // 创建新的Q&A项
    const newQA = {
        category: category,
        zh: {
            question: zhQuestion,
            answer: zhAnswer
        },
        en: {
            question: enQuestion || zhQuestion,
            answer: enAnswer || zhAnswer
        }
    };

    // 添加到数据
    qaData.unshift(newQA);
    // 重新渲染列表
    filterQAList(searchInput.value.toLowerCase().trim(), getCurrentCategory());
    // 隐藏模态框
    hideModal(addModal, modalContent);
    // 清空表单
    addForm.reset();
});

// 点击模态框背景关闭
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        hideModal(loginModal, loginContent);
        loginForm.reset();
        loginError.classList.add('hidden');
    }
});

addModal.addEventListener('click', (e) => {
    if (e.target === addModal) {
        hideModal(addModal, modalContent);
        addForm.reset();
    }
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2');
        navbar.classList.remove('py-3');
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-2');
        navbar.classList.remove('shadow-lg');
    }
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // ESC关闭模态框
    if (e.key === 'Escape') {
        if (!loginModal.classList.contains('hidden')) {
            hideModal(loginModal, loginContent);
            loginForm.reset();
            loginError.classList.add('hidden');
        }
        if (!addModal.classList.contains('hidden')) {
            hideModal(addModal, modalContent);
            addForm.reset();
        }
    }
    // Ctrl+F聚焦搜索框
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
});