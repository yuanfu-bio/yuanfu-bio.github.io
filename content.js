const portfolio = {
  profile: {
    keywords: ['单细胞多组学', 'AI for Science', '虚拟细胞', '抗体设计'],
    identity: '复旦大学药学本科 · 生物信息学博士在读 · 预计 2027 年毕业',
    summary: '聚焦计算生物学、多组学数据分析与 AI for Science，将生物学洞察、计算方法开发与 AI 模型研究相结合，开发解决复杂生物学问题的工具与模型，推动生物医学研究与科学发现。',
    directions: 'AI for Biology · Virtual Cell',
    emphasis: [
      '计算生物学、多组学数据分析与 AI for Science',
      '主导了细胞表面蛋白邻近网络的算法开发与分析体系构建',
      '自身免疫性疾病、肝脏衰老与炎症、B 细胞发育',
      '抗体设计、分子动力学模拟及结构分析经验',
      'AI for Biology 与 Virtual Cell',
      'AI Agent 开发与落地',
      '单细胞多组学基础模型'
    ],
    paragraphs: [
      '我的研究聚焦于计算生物学、多组学数据分析与 AI for Science。我希望发挥跨学科背景的优势，将生物学洞察、计算方法开发与 AI 模型研究相结合，开发解决复杂生物学问题的工具与模型，推动生物医学研究与科学发现。',
      '博士期间，我主导了细胞表面蛋白邻近网络的算法开发与分析体系构建，并将其应用于免疫相关疾病研究。同时，我积累了涵盖自身免疫性疾病、肝脏衰老与炎症、B 细胞发育等领域的多组学研究经验，并具备抗体设计、分子动力学模拟及结构分析经验。',
      '近期，我进一步将研究拓展至 AI for Biology 与 Virtual Cell 方向，主导了面向单细胞配对多组学数据的 AI Agent 开发与落地，并参与双模态高掩码对比学习方案的设计及单细胞多组学基础模型（Single-Cell Multi-Omics Foundation Model）的构建。'
    ]
  },
  education: {
    university: '复旦大学',
    programs: [
      {start: '2023.09', end: '2027.06', degree: '生物信息学博士', department: '生物医学研究院', note: '卓博计划', status: '在读', expected: true},
      {start: '2019.09', end: '2023.06', degree: '药学本科', department: '药学院', secondary: {start: '2020.09', end: '2023.06', degree: '经济学第二专业', department: '经济学院'}}
    ]
  },
  internships: [
    {
      start: '2023.09', end: '2024.09', company: '罗氏（中国）', companyEnglish: 'Roche',
      role: '医药信息顾问', department: 'CE Oncology · 客户交互模式—肿瘤领域',
      summary: '参与抗肿瘤药物泰圣奇的推广与患者援助工作，负责复旦肿瘤医院、中山医院、瑞金医院三家医院近 200 名患者的医药信息沟通，并协助患者及家属办理慈善援助申请与赠药服务。',
      emphasis: ['三家医院近 200 名患者']
    }
  ],
  projects: {
    celllore: {
      title: 'CellLore / CellEclipse',
      repository: 'https://github.com/yuanfu-bio/CellLore',
      subtitle: '单细胞数据策展 Agent 与多模态基础模型',
      category: 'SINGLE-CELL AI · DATA & MODELS',
      tags: ['RNA + ATAC', '数据策展 Agent', '多模态表征', '基础模型'],
      status: 'DeeCamp 2026 年度总冠军 · 团队项目',
      short: '为单细胞多组学建模提供可追溯的数据，我主导开发并落地 CellLore 数据策展 Agent，连接数据发现与 RNA–ATAC 配对整理，并参与 CellEclipse 双模态高掩码对比学习方案设计与基础模型构建。团队汇集 113 项研究、约 898 万落盘细胞，获 DeeCamp 2026 年度总冠军。',
      details: [
        '单细胞多组学基础模型需要规模化的配对数据，但公开研究在数据组织、模态配对和质量控制上存在差异。CellLore / CellEclipse 将数据策展 Agent 与双模态基础模型连接起来，构建从公开数据发现、RNA–ATAC 同细胞配对到联合表征学习的完整流程。',
        'CellLore 负责发现、核查与整理配对数据，形成跨组织的 HuPMO 数据集；CellEclipse 在此基础上，通过高掩码与对比学习探索 RNA–ATAC 联合表征。我主导 CellLore Agent 的开发与落地，并参与 CellEclipse 方案设计及模型构建。项目获 DeeCamp 2026 年度总冠军。'
      ],
      detailMetrics: [
        [
          "113",
          "独立研究"
        ],
        [
          "1,028",
          "RNA–ATAC 配对数据单元"
        ],
        [
          "8,975,454",
          "落盘细胞"
        ],
        [
          "60",
          "组织"
        ]
      ],
      detailMetricNote: "HuPMO 数据集规模；细胞数按数据获取后的落盘规模统计。",
      detailSections: [
        {
          "id": "agent",
          "navTitle": "数据 Agent",
          "title": "CellLore：从研究目标到配对语料",
          "paragraphs": [
            "单细胞基础模型需要规模化、可追溯的数据，但公开研究的样本组织、模态配对、原始文件与生物学注释并不统一。CellLore 将研究规划、资源发现、证据核查、获取策略和数据策展组织成 Agent 工作流，连接科学问题与可用于建模的语料。",
            "工作流围绕 Plan、Discovery、QC 和 Curator 四个环节展开，并将下载与语料审批、数据来源和落盘质量检查纳入流程。"
          ],
          "points": [
            [
              "Plan · 研究规划",
              "从研究目标出发形成检索与语料获取计划。"
            ],
            [
              "Discovery · 资源与证据发现",
              "关联公开研究、可用资源与原始文件，检查 RNA 与 ATAC 的配对证据。"
            ],
            [
              "QC · 获取前的质量判断",
              "结合质量评估、数据谱系与潜在泄漏检查，形成获取策略。"
            ],
            [
              "Curator · 获取与语料整理",
              "串联下载审批、文件传输、数据策展、统一处理、语料治理与最终落盘检查。"
            ]
          ],
          "bullets": [
            "同细胞配对：明确连接每个细胞的 RNA profile 与 ATAC 测量。",
            "保留原始信号：保留原始 RNA counts 和可索引的 ATAC fragments。",
            "统一重处理：在可复现工作流下组织处理与记录。",
            "生物学注释：将供体、组织、疾病和处理条件作为语料的重要组成部分。",
            "标准化数据模型：让整理后的配对数据单元遵循一致的归档约定。"
          ],
          "sourcePage": 3
        },
        {
          "id": "corpus",
          "navTitle": "配对语料",
          "title": "HuPMO：跨组织、技术与状态的配对数据集",
          "paragraphs": [
            "HuPMO 是通过 CellLore 构建的人类单细胞 RNA–ATAC 配对数据集，汇集 113 项独立研究、1,028 个配对数据单元与 8,975,454 个落盘细胞，覆盖 60 类组织。数据涵盖神经与感觉、造血与免疫、生殖与乳腺、消化、发育模型、肌肉骨骼、呼吸和心血管等系统，为跨组织的多组学建模提供数据基础。",
            "按同细胞配对数据的细胞规模比较，HuPMO 约为 scMMO-atlas（768,459 个细胞）的 11.7 倍，scMMDB 为 640,192 个细胞。HuPMO 的 8,975,454 个细胞按数据获取后的落盘数量统计。"
          ],
          "points": [
            [
              "疾病状态注释",
              "98%，对应 8,798,553 个细胞。"
            ],
            [
              "处理条件注释",
              "93.8%，对应 8,423,255 个细胞。"
            ],
            [
              "完整生物学背景",
              "89.5%，对应 8,036,697 个细胞。"
            ]
          ],
          "tables": [
            {
              "title": "技术来源与配对数据单元",
              "open": true,
              "columns": [
                "技术类型",
                "数据单元数"
              ],
              "rows": [
                [
                  "10x Multiome",
                  "868"
                ],
                [
                  "SHARE-seq",
                  "70"
                ],
                [
                  "DOGMA-seq",
                  "53"
                ],
                [
                  "未明确类型的 RNA + ATAC multiome",
                  "24"
                ],
                [
                  "CAT-ATAC",
                  "5"
                ],
                [
                  "TEA-seq",
                  "5"
                ],
                [
                  "NEAT-seq",
                  "2"
                ],
                [
                  "SNARE-seq2",
                  "1"
                ]
              ]
            },
            {
              "title": "器官系统分布",
              "columns": [
                "器官系统",
                "细胞数"
              ],
              "rows": [
                [
                  "神经与感觉",
                  "4,664,347"
                ],
                [
                  "造血与免疫",
                  "879,262"
                ],
                [
                  "生殖与乳腺",
                  "688,621"
                ],
                [
                  "消化",
                  "621,975"
                ],
                [
                  "发育模型",
                  "542,758"
                ],
                [
                  "肌肉骨骼",
                  "383,480"
                ],
                [
                  "呼吸",
                  "310,460"
                ],
                [
                  "心血管",
                  "273,086"
                ]
              ]
            },
            {
              "title": "代表组织及细胞分布",
              "columns": [
                "组织",
                "细胞数"
              ],
              "rows": [
                [
                  "小脑皮层",
                  "901,536"
                ],
                [
                  "壳核",
                  "774,258"
                ],
                [
                  "颞中回",
                  "744,610"
                ],
                [
                  "后扣带回",
                  "710,937"
                ],
                [
                  "黑质",
                  "693,898"
                ],
                [
                  "视网膜",
                  "389,821"
                ],
                [
                  "前列腺",
                  "355,458"
                ],
                [
                  "结肠",
                  "316,602"
                ]
              ]
            }
          ],
          "sourcePage": 4
        },
        {
          "id": "peaks",
          "navTitle": "Peak Tokenizer",
          "title": "统一 ATAC 特征与 Intrinsic Peak Tokenizer",
          "paragraphs": [
            "跨数据集的 ATAC peak 集合并不天然一致。团队采用约 160 万个 consensus peaks（cPeaks）构建统一特征轴，将不同数据集组织为共享的 consensus peak matrix，衔接后续 ATAC 表征学习。",
            "Intrinsic Peak Tokenizer 将调控区域的序列、motif 与注释信息共同编码，形成具有生物学信息的 peak 表征。"
          ],
          "points": [
            [
              "Sequence Encoder",
              "编码 DNA 序列，并区分 cPeak 区域与 padding 区域。"
            ],
            [
              "Motif Encoder",
              "纳入转录因子结合 motif、motif 家族与聚类、链方向及信号强度。"
            ],
            [
              "Annotation Encoder",
              "整合基因注释、重复元件、CpG、保守性等特征。"
            ],
            [
              "融合与表征",
              "融合多类输入，组织模态特有信息与跨模态共享信息，生成 intrinsic embedding。"
            ]
          ],
          "sourcePage": 5
        },
        {
          "id": "model",
          "navTitle": "模型架构",
          "title": "CellEclipse：双模态高掩码表征学习",
          "paragraphs": [
            "CellEclipse 从 RNA 原始计数与 ATAC fragments 出发，分别进行细胞归一化与 cPeak 特征化，再经基因／cPeak identity lookup、数据增强和双模态编码，形成 RNA 与 ATAC latent representations。",
            "模型同时组织完整联合视图、高掩码联合视图与单模态视图，通过 Shared Attention Transformer 学习基因、ATAC、细胞及高掩码细胞的表征；Cross Modality Decoder 对 RNA、ATAC 与技术噪声相关矩阵进行重构。"
          ],
          "points": [
            [
              "高掩码与对比学习",
              "结合 InfMasking 思路与不同增强视图，探索稀疏调控信号的自监督表征。"
            ],
            [
              "跨模态对齐",
              "通过共享细胞表示与 Bridge Align Loss 连接 RNA 和 ATAC 表征。"
            ],
            [
              "多目标训练",
              "联合优化 NCE Loss、Bridge Align Loss、Reconstruction Loss 与 Masking Loss，结合对比学习、跨模态对齐及重构任务学习细胞表征。"
            ],
            [
              "生物学与技术因素",
              "方案包含 Tn5-bias augmentation，并将技术噪声重构纳入模型设计。"
            ]
          ],
          "sourcePage": 6
        },
        {
          "id": "evaluation",
          "navTitle": "评估",
          "title": "评估：细胞分群与 RNA–ATAC 联合表征",
          "paragraphs": [
            "模型评估关注两个问题：学到的表征能否区分细胞类型，以及 RNA 与 ATAC 能否在共享空间中保留一致的细胞状态信息。测试集的 UMAP 分别按已知细胞类型和样本来源着色，用于观察细胞类型结构与样本分布。",
            "在零样本细胞聚类任务中，冻结 CellEclipse Encoder，对细胞表征进行 K-Means 聚类，并与其他方法比较。联合表征评估同样使用冻结编码器，检验 RNA 与 ATAC 在共享空间中的对齐及细胞类型保持情况。"
          ],
          "points": [
            [
              "细胞分群",
              "比较基础方法与基础模型在零样本聚类任务中的表现，具体结果见下方评估图。"
            ],
            [
              "细胞类型与模态",
              "以 Cell-type GC、Modality ASW、Modality Balance Score、Modality iLISI 等指标观察细胞类型保持与跨模态组织。"
            ]
          ],
          "sourcePage": 7
        },
        {
          "id": "team",
          "navTitle": "团队与荣誉",
          "title": "团队协作与项目荣誉",
          "paragraphs": [
            "项目由跨学科团队协作完成，工作涵盖数据策展、统一 ATAC 特征与 Peak Tokenizer、模型架构及评估。我主导 CellLore 数据策展 Agent 的开发与落地，并参与双模态高掩码对比学习方案设计及 CellEclipse 构建，将单细胞数据分析经验与 Agent 开发、模型研究相结合。",
            "团队项目获得 DeeCamp 2026 年度总冠军，并获得生命科学赛道冠军、最佳技术先进性奖、最佳产品设计与呈现奖。DeeCamp 2026 聚焦 AI for Science，以真实科研问题和跨学科项目实践为导向。"
          ],
          "sourcePage": 2
        }
      ],
      brochure: {
        "pdf": "assets/celllore-celleclipse-brochure.pdf",
        "filename": "CellLore-CellEclipse-宣传册.pdf",
        "initialPage": 3,
        "pages": [
          {
            "src": "assets/deecamp-brochure-01.webp",
            "title": "项目封面",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-02.webp",
            "title": "团队与研究背景",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-03.webp",
            "title": "CellLore Agent 与 HuPMO 数据策展",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-04.webp",
            "title": "组织、技术与生物学状态覆盖",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-05.webp",
            "title": "统一 ATAC 特征与 Peak Tokenizer",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-06.webp",
            "title": "CellEclipse 模型架构",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-07.webp",
            "title": "评估与联合表征",
            "width": 1350,
            "height": 1950
          },
          {
            "src": "assets/deecamp-brochure-08.webp",
            "title": "CellEclipse 视觉封底",
            "width": 1350,
            "height": 1950
          }
        ]
      },
      image: 'assets/celllore-data.png',
      previewFit: 'cover',
      previewPosition: '50% 22%',
      previewCaption: 'CellLore 数据策展 Agent 工作流与数据规模',
      alt: 'CellLore 数据策展 Agent 工作流与 HuPMO 数据集规模',
      caption: 'CellLore 数据策展流程与 HuPMO 数据集；细胞数按落盘规模统计。',
      links: [
        ['相关报道 01 ↗', 'https://mp.weixin.qq.com/s/BEn4Txt73NW712CQX_cnEQ'],
        ['相关报道 02 ↗', 'https://mp.weixin.qq.com/s/2XEuVz6zrL5V5mCFwXiCWw']
      ]
    },
    piseq: {
      title: 'PI-seq',
      subtitle: '单细胞多组学新技术开发 · 细胞表面蛋白邻近网络',
      category: 'TECHNOLOGY DEVELOPMENT · PROXIMITY OMICS',
      tags: ['新组学技术开发', '表面蛋白邻近网络', '多组学整合', '统计建模'],
      status: '博士课题 · 论文准备中',
      short: 'PI-seq 在转录组和表面蛋白丰度之外，引入细胞表面蛋白邻近网络，帮助理解表面分子如何组织。我参与该单细胞多组学新技术的开发，主导邻近网络算法与分析体系构建，并将其用于 SLE 相关免疫细胞研究。',
      details: [
        '表达量可以描述细胞有哪些分子、各有多少，却难以反映细胞表面蛋白彼此如何组织。PI-seq 是我参与开发的单细胞多组学新技术，将转录组、表面蛋白丰度与蛋白邻近关系结合，为理解细胞状态提供新的观察维度。',
        '我主导细胞表面蛋白邻近网络的算法开发与分析体系构建，通过蛋白共捕获分析、随机置换零模型和差异邻近网络分析，研究表面分子组织及其变化。目前已将该体系用于 SLE 研究，比较不同免疫细胞状态中的表面蛋白邻近网络，相关博士课题论文准备中。'
      ],
      detailSections: [
        {
          "id": "question",
          "navTitle": "技术视角",
          "title": "从分子丰度走向细胞表面组织",
          "paragraphs": [
            "转录组和表面蛋白定量描述细胞的分子组成。PI-seq 进一步关注同一细胞表面分子之间的邻近关系，将表面蛋白如何组织纳入细胞状态研究。",
            "这项工作连接单细胞多组学新技术开发与计算分析：我参与技术开发，并主导细胞表面蛋白邻近网络的算法开发及分析体系构建。"
          ]
        },
        {
          "id": "annotation",
          "navTitle": "细胞注释",
          "title": "B 细胞亚群的多组学注释",
          "paragraphs": [
            "结合 RNA、表面蛋白与 WNN 联合嵌入刻画 B 细胞亚群，并以基因及表面蛋白标记交叉核对细胞身份，为后续按亚群比较邻近关系提供注释依据。"
          ],
          "figureIds": ["embedding", "rnaMarkers", "proteinMarkers"]
        },
        {
          "id": "analysis",
          "navTitle": "统计分析",
          "title": "邻近网络的计算与统计分析",
          "points": [
            [
              "蛋白共捕获分析",
              "围绕测量中的蛋白共捕获关系组织数据，构建候选邻近信号。"
            ],
            [
              "背景与零模型",
              "采用随机置换零模型，为背景共捕获与候选邻近关系的区分提供统计参照。"
            ],
            [
              "差异邻近网络",
              "在细胞亚群与研究条件之间比较邻近关系，刻画表面分子组织的变化。"
            ],
            [
              "联合解释",
              "将邻近网络与蛋白丰度、细胞注释及转录状态共同分析，形成可进一步验证的生物学假设。"
            ]
          ],
          "figureIds": ["permutation"]
        },
        {
          "id": "sle",
          "navTitle": "SLE 研究",
          "title": "在 SLE 研究中的多组学应用",
          "paragraphs": [
            "在自身免疫性疾病研究中，联合分析 RNA、表面蛋白和蛋白邻近网络，比较健康与 SLE 样本及不同 B 细胞亚群的状态。",
            "分析同时关注分子丰度和邻近关系的变化：在细胞身份与转录状态的背景下解释表面分子组织，并在供体层面核对候选蛋白对的评分变化。"
          ],
          "figureIds": ["proximityHeatmap", "referenceNetworks", "differentialNetworks", "donorComparison"]
        },
        {
          "id": "progress",
          "navTitle": "研究进展",
          "title": "当前进展",
          "paragraphs": [
            "相关算法与分析体系已用于博士课题研究。PI-seq 研究论文正在准备中，预计于 2026 年底投稿，期待与大家分享这项工作。"
          ]
        }
      ],
      figures: {
        embedding: {
          title: 'RNA、表面蛋白与 WNN 联合嵌入',
          srcRef: 'secondaryImage', width: 2828, height: 896,
          alt: 'B 细胞亚群在 RNA、Protein 与 WNN 嵌入中的分布',
          caption: '比较不同模态中的 B 细胞状态分布，并以 WNN 联合嵌入整合细胞注释。'
        },
        rnaMarkers: {
          title: 'B 细胞亚群的 RNA 标记',
          src: 'assets/pi-seq-rna-markers.png', width: 8767, height: 2944,
          alt: 'B 细胞亚群 RNA 标记基因的表达气泡图',
          caption: '以标记基因表达及细胞比例核对各 B 细胞亚群的转录特征。'
        },
        proteinMarkers: {
          title: 'B 细胞亚群的表面蛋白标记',
          src: 'assets/pi-seq-protein-markers.png', width: 6689, height: 2691,
          alt: 'B 细胞亚群表面蛋白标记的表达气泡图',
          caption: '以表面蛋白标记补充 RNA 注释，交叉核对细胞身份及状态。'
        },
        permutation: {
          title: '标签置换检验与差异邻近评分',
          src: 'assets/pi-seq-permutation.png', width: 2470, height: 1436,
          alt: 'TrB、NAV、USM 与 SM 亚群的标签置换零分布和差异邻近关系火山图',
          caption: '比较观测到的差异蛋白对数量与标签置换零分布，并结合评分差异、统计检验和供体支持情况筛选候选关系。'
        },
        proximityHeatmap: {
          title: '跨供体的蛋白邻近关系',
          src: 'assets/pi-seq-proximity-heatmap.png', width: 2912, height: 1714,
          alt: '健康与 SLE 供体在五类 B 细胞亚群中的蛋白邻近评分热图',
          caption: '按 TrB、NAV、USM、SM 与 AtypB 亚群比较 HC 和 SLE 供体的邻近评分；灰色标记支持不足的蛋白对。'
        },
        referenceNetworks: {
          title: 'USM 与 SM 的表面蛋白邻近网络',
          srcRef: 'image', width: 1710, height: 1532,
          alt: '健康与 SLE 样本中 USM 和 SM B 细胞亚群的表面蛋白邻近网络',
          caption: '并列查看健康与 SLE 条件下的网络组织，保留蛋白节点、邻近评分与供体支持信息。'
        },
        differentialNetworks: {
          title: 'SLE 相关差异邻近网络',
          src: 'assets/pi-seq-differential-network.png', width: 1658, height: 1732,
          alt: 'TrB、NAV、USM 与 SM 亚群中相对健康对照上升或下降的蛋白邻近关系',
          caption: '展示各 B 细胞亚群中 SLE 相对 HC 上升或下降的邻近关系，并区分不同供体支持情况。'
        },
        donorComparison: {
          title: '候选邻近关系的供体层面比较',
          src: 'assets/pi-seq-donor-comparison.png', width: 2194, height: 1314,
          alt: '按 B 细胞亚群比较候选蛋白对在 HC 和 SLE 供体中的邻近评分',
          caption: '逐个比较候选蛋白对在 HC 与 SLE 供体中的评分，核对组间变化及供体间一致性。'
        }
      },
      image: 'assets/pi-seq-network.png',
      previewCaption: 'B 细胞表面蛋白邻近网络',
      alt: 'PI-seq 材料中健康与 SLE 样本的 B 细胞表面蛋白邻近网络',
      caption: '细胞表面分子间的邻近网络；图来自 PIseq-SLE 研究材料。',
      secondaryImage: 'assets/pi-seq-umap.png',
      secondaryAlt: '同一研究中的 RNA、蛋白与 WNN 单细胞嵌入',
      secondaryCaption: 'RNA、表面蛋白与 WNN 联合嵌入，用于刻画细胞状态。'
    },
    tagforge: {
      "title": "TagForge",
      "repository": "https://github.com/yuanfu-bio/TagForge",
      "subtitle": "面向复杂条码测序的分子定量工具",
      "category": "SOFTWARE DEVELOPMENT · SEQUENCING",
      "tags": [
        "工具开发",
        "条码校正",
        "UMI 分子计数",
        "规模化数据处理"
      ],
      "status": "个人开发工具",
      "short": "我开发了 TagForge，将复杂条码测序数据转化为可追溯的分子证据与稀疏计数。工具支持可配置文库解析、逐片段条码校正和 UMI 聚类归并，并结合并行计算、断点恢复及质控报告，服务自建文库与抗体标签等数据的定量分析。",
      "details": [
        "自建文库和组合条码实验具有不同的片段布局、linker 与条码结构。TagForge 以“身份条码 × 特征条码 × UMI”为通用分析框架，通过可配置结构解析、逐片段白名单校正和 UMI 分子归并，将双端测序读段转化为可追溯的分子证据与稀疏计数。",
        "我将条码身份判定与分子计数算法组织为可复用的分析流程，并结合 Parquet、DuckDB、独立分组并行、断点恢复和输入校验支持规模化处理。工具输出分子明细、计数矩阵及样本／批次报告，便于从原始读段追踪到定量结果，并开展下采样与质量诊断。"
      ],
      "detailSections": [
        {
          "id": "principle",
          "navTitle": "工具原理",
          "title": "从条码测序数据到分子证据与定量结果",
          "paragraphs": [
            "分析围绕身份条码、特征条码与 UMI 展开。身份条码可表示细胞或样本，特征条码对应待定量标签；校正条码身份后，在每个身份与特征组合内完成分子归并和计数。"
          ],
          "points": [
            [
              "可配置文库结构",
              "按配置定位 linker，并在配置允许时回退至固定位置，解析 R1／R2 中的条码片段与 UMI。"
            ],
            [
              "分子证据与稀疏输出",
              "将分子及其 reads 支持保留为可追溯记录，输出 Parquet、MTX 与 TSV，衔接后续定量分析。"
            ],
            [
              "下采样诊断",
              "对分子支持 reads 进行下采样，以测序饱和度观察读段重复程度，以非单例分子比例观察多条 reads 支持的分子占比。"
            ]
          ],
          "figureIds": [
            "overview"
          ]
        },
        {
          "id": "barcodes",
          "navTitle": "条码校正",
          "title": "逐片段校正与条码身份判定",
          "paragraphs": [
            "将碱基错配与条码位置偏移纳入同一判定过程，逐片段确定条码身份，再拼接校正后的条码。"
          ],
          "points": [
            [
              "原位精确匹配",
              "原始窗口精确命中白名单时，直接保留该条码身份。"
            ],
            [
              "候选搜索",
              "未精确命中时，在配置允许范围内搜索偏移窗口与白名单错配候选。"
            ],
            [
              "候选排序",
              "依次比较修改类型数、总修改幅度、错配数与偏移幅度。"
            ],
            [
              "唯一身份判定",
              "仅保留唯一最优条码身份；无候选或存在身份歧义时排除该记录。"
            ]
          ]
        },
        {
          "id": "molecules",
          "navTitle": "分子计数",
          "title": "在独立分组内归并 UMI 与计数分子",
          "paragraphs": [
            "以校正后的“身份条码 × 特征”为聚类范围，采用 UMI-tools directional 方法归并 reads。默认 Hamming 距离不超过 1，同时要求 n(parent) ≥ 2 × n(child) − 1，结合序列距离与读段支持量判定归并关系。",
            "以下为机制示意：即使两个 UMI 仅相差 1 个碱基，也需结合丰度条件判断；不同身份或特征分组分别聚类。"
          ],
          "tables": [
            {
              "title": "UMI 归并示意（非样本统计）",
              "open": true,
              "columns": [
                "分组",
                "UMI 与 reads 支持",
                "计数结果"
              ],
              "rows": [
                [
                  "B01 × F1",
                  "AAAC：8 reads；AAAT：1 read",
                  "9 reads → 1 个分子"
                ],
                [
                  "B01 × F2",
                  "AAAC：8 reads；AAAT：7 reads",
                  "15 reads → 2 个分子"
                ]
              ]
            }
          ],
          "figureIds": [
            "mechanism"
          ]
        },
        {
          "id": "engineering",
          "navTitle": "工程实现",
          "title": "规模化处理、并行计算与可靠恢复",
          "points": [
            [
              "计算与存储",
              "结合分块读取、Parquet、DuckDB 与稀疏输出组织数据，使用精确匹配、邻域查找和校正缓存优化处理。"
            ],
            [
              "独立分组并行",
              "按完整条码–特征组合分桶，在并行处理时保留 UMI 聚类边界。"
            ],
            [
              "断点恢复与校验",
              "支持提取／校正批次恢复，复用结果前核验输入、配置与上游状态。"
            ],
            [
              "批量执行与追踪",
              "结合 Slurm、实时进度与分段质控，生成样本及批次 HTML／Excel 报告。"
            ]
          ]
        },
        {
          "id": "reports",
          "title": "真实样本运行记录",
          "paragraphs": [
            "现有 PB–FB 与 PB–CB 报告记录了真实自建文库的处理结果，包含读段有效性、注释、分子计数、饱和度与下采样诊断。下列数值来自单次样本运行，用于说明工具输出内容。"
          ],
          "tables": [
            {
              "title": "PB-FB-ALL 样本报告",
              "open": true,
              "columns": [
                "输出项",
                "记录值"
              ],
              "rows": [
                [
                  "Total Reads",
                  "276,786,643"
                ],
                [
                  "Features",
                  "109"
                ],
                [
                  "Valid Ratio",
                  "94.6%"
                ],
                [
                  "Annotated",
                  "98.4%"
                ],
                [
                  "Molecules",
                  "37,630,534"
                ],
                [
                  "PB",
                  "28,446,938"
                ],
                [
                  "Saturation",
                  "85.5%"
                ]
              ]
            },
            {
              "title": "PB-CB-ALL 样本报告",
              "columns": [
                "输出项",
                "记录值"
              ],
              "rows": [
                [
                  "Total Reads",
                  "218,078,958"
                ],
                [
                  "Valid Ratio",
                  "98.5%"
                ],
                [
                  "Molecules",
                  "186,288,756"
                ],
                [
                  "Retained Molecules",
                  "106,919,824"
                ],
                [
                  "PB",
                  "75,080,148"
                ],
                [
                  "CB",
                  "1,754,529"
                ],
                [
                  "PB Pass Rate",
                  "78.7%"
                ]
              ]
            }
          ],
          "navTitle": "运行示例",
          "figureIds": [
            "sampleReport"
          ],
          "points": [
            [
              "PB–CB 分配规则",
              "在 CB correction 后，仅将支持读段中主导 CB 占比达到 80% 的 PB 分配给该 CB，其余保留为未分配。"
            ]
          ]
        },
        {
          "id": "extensions",
          "navTitle": "应用与说明",
          "title": "与技术开发、生物学分析及扩展场景衔接",
          "paragraphs": [
            "在真实自建文库中，结合分段条码校验、分子分布、特征丰度和下采样结果定位处理环节的异常，判断数据是否适合进入后续定量与邻近网络分析。",
            "通过配置条码结构与特征定义，通用核心可面向以下应用场景扩展。各场景仍需结合具体文库设计与实验数据验证；报告中的样本数值是具体运行记录，不代表跨数据集的通用性能评测。"
          ],
          "bullets": [
            "抗体标签与组合条码：身份条码 × 抗体标签。",
            "Sample Tags：细胞 × 样本标签。",
            "CRISPR Guide Capture：细胞 × sgRNA。",
            "Antigen Capture：细胞 × 抗原标签。",
            "启动子／报告基因条码：身份条码 × 设计标签。"
          ],
          "downloads": [
            {
              "label": "原理说明 · 中文 PDF",
              "src": "assets/tagforge-principle-zh-CN.pdf",
              "filename": "TagForge-原理说明-中文.pdf"
            },
            {
              "label": "Core principle · English PDF",
              "src": "assets/tagforge-principle-en.pdf",
              "filename": "TagForge-Core-Principle-English.pdf"
            }
          ]
        }
      ],
      "image": "assets/tagforge-principle-overview.webp",
      "alt": "TagForge 文库结构解析、条码校正、UMI 分子计数与下采样诊断全流程示意",
      "caption": "TagForge 通用分析流程；文库结构与计数为机制示意，扩展场景需结合实验设计验证。",
      "previewCaption": "可配置条码解析、身份校正与 UMI 分子计数",
      "secondaryImage": "assets/tagforge-report.png",
      "secondaryAlt": "TagForge PB–FB 实际运行报告中的条码质控与下采样分析",
      "secondaryCaption": "PB–FB 单次样本运行记录，展示条码质控、分子计数与下采样结果。",
      "galleryLabel": "查看原理与运行示例 ↗",
      "figures": {
        "overview": {
          "title": "TagForge 通用分析流程",
          "srcRef": "image",
          "width": 3200,
          "height": 2000,
          "alt": "TagForge 文库结构解析、条码校正、UMI 分子计数与下采样诊断全流程示意",
          "caption": "TagForge 通用分析流程；文库结构与计数为机制示意，扩展场景需结合实验设计验证。"
        },
        "mechanism": {
          "title": "条码身份校正、UMI 归并与工程实现",
          "src": "assets/tagforge-principle-mechanism.webp",
          "width": 3200,
          "height": 2000,
          "alt": "TagForge 白名单条码校正、UMI directional 归并与工程化机制示意图",
          "caption": "条码校正仅保留唯一最优身份；UMI 归并同时考虑距离和丰度条件。图中计数为机制示意。"
        },
        "sampleReport": {
          "title": "真实样本运行报告",
          "srcRef": "secondaryImage",
          "alt": "TagForge PB–FB 实际运行报告中的条码质控与下采样分析",
          "caption": "PB–FB 单次样本运行记录，展示条码质控、分子计数与下采样结果。",
          "width": 1878,
          "height": 1200
        }
      }
    },
    structure: {
      "title": "抗体设计与结构计算",
      "subtitle": "抗体序列建模 · 表位分析 · 分子动力学模拟",
      "category": "ANTIBODY DESIGN · STRUCTURAL BIOLOGY",
      "tags": [
        "抗体设计",
        "抗体语言模型",
        "AlphaFold3",
        "分子动力学"
      ],
      "status": "抗体与结构计算研究",
      "short": "我结合抗体语言模型微调、轻重链配对学习与 BCR 序列分析开展候选设计，并利用 AlphaFold3 复合物预测、界面评分和聚类分析进行表位筛选。同时开展蛋白质分子动力学模拟，从序列、结构与动态行为理解分子特征，为后续实验研究提供计算依据。",
      "details": [
        "围绕候选抗体设计与评估，我开展抗原相关 BCR 序列及体细胞高频突变分析，探索抗体语言模型领域微调与轻重链配对学习，并构建结合序列相似性、MSA、AlphaFold3 多随机种子预测、界面评分和层次聚类的表位筛选流程。",
        "在结构计算方面，我开展蛋白质分子动力学模拟，分析分子的结构与动态行为。结合序列分析、结构预测与模拟结果，为候选解释及后续实验研究提供计算依据；候选抗体的功能和亲和力仍需实验验证。相关图表在下文的表位分析与分子动力学部分展示。"
      ],
      "detailSections": [
        {
          "id": "sequence",
          "title": "抗体序列与候选设计",
          "paragraphs": [
            "结合抗原相关 BCR 序列及体细胞高频突变分析，研究候选抗体的序列特征，并探索抗体语言模型领域微调与轻重链配对学习。",
            "序列建模与结构评估相互衔接：候选设计之后，再结合复合物预测、界面分析及候选之间的相似性组织筛选。"
          ],
          "navTitle": "序列设计"
        },
        {
          "id": "epitopes",
          "title": "结合序列与复合物结构筛选表位",
          "points": [
            [
              "MSA 与复合物输入",
              "收集抗原、重链和轻链的 MSA 信息，组织抗原–抗体复合物预测输入。"
            ],
            [
              "AlphaFold3 多随机种子预测",
              "结合抗原–抗体链之间的 Ag-ipTM 与 AlphaFold3 ranking_score 评估候选界面。"
            ],
            [
              "序列与结构聚类",
              "将序列相似性、MSA 与层次聚类结果和预测结构相互对照，识别可能具有不同表位的候选抗体。"
            ]
          ],
          "navTitle": "表位筛选",
          "paragraphs": [
            "将结构预测得到的表位分组与重、轻链序列层次聚类并列比较，检查序列相似性与预测结合方式的对应关系。"
          ],
          "figureIds": [
            "modelScores",
            "heavyClustering",
            "lightClustering"
          ],
          "figureLayout": "columns"
        },
        {
          "id": "epitope-overview",
          "navTitle": "结构总览",
          "title": "PD-L1 候选表位的结构总览",
          "paragraphs": [
            "通过总览视频并列查看 Epi01–Epi10 预测表位组的复合物旋转视图，比较不同候选组的空间取向与结合区域。"
          ],
          "videoIds": [
            "epitopeOverview"
          ]
        },
        {
          "id": "dynamics",
          "title": "结构预测与分子动力学分析",
          "paragraphs": [
            "以 EGFR 和 XPA 为例，将结构预测与动态模拟、相互作用能分析结合。EGFR 分析包含结构叠合、PAE 和 100 ns 模拟中的相互作用能变化；轨迹视频用于查看模拟过程中的构象变化。",
            "XPA 分析比较 DNA 结合区及 Kla 修饰相关结构，并展示残基层面的范德华与库仑相互作用能。结合结构与能量信息，为分子特征解释和后续实验设计提供计算依据。"
          ],
          "navTitle": "分子模拟",
          "figureIds": [
            "egfrAnalysis",
            "xpaAnalysis"
          ],
          "videoIds": [
            "egfrTrajectory"
          ]
        },
        {
          "id": "validation",
          "title": "从计算依据走向实验验证",
          "paragraphs": [
            "计算筛选用于组织候选优先级与可检验假设。候选抗体的功能与亲和力仍需结合实验验证，结构预测及模拟结果作为后续研究的依据。"
          ],
          "navTitle": "实验验证"
        }
      ],
      "image": "assets/egfr-analysis.png",
      "previewCaption": "结构预测、PAE 与 100 ns 分子动力学分析",
      "alt": "EGFR 相关结构预测、PAE 与分子动力学分析图",
      "caption": "结构与模拟工作示例：EGFR 相关分析。",
      "secondaryImage": "assets/antibody-still.png",
      "secondaryAlt": "抗体表位分析中的复合物结构叠合",
      "secondaryCaption": "抗体表位筛选材料中的结构叠合。",
      "galleryLabel": "查看结构图与视频 ↗",
      "figures": {
        "modelScores": {
          "title": "PD-L1 候选模型评分与表位分组",
          "width": 1198,
          "height": 1824,
          "alt": "PD-L1 候选模型评分与表位分组",
          "caption": "候选模型的 ranking score、Ag-ipTM 与预测表位分组，用于组织结构筛选结果。",
          "src": "assets/antibody-model-scores.webp"
        },
        "heavyClustering": {
          "title": "抗体重链序列层次聚类",
          "width": 1126,
          "height": 1910,
          "alt": "抗体重链序列层次聚类",
          "caption": "按重链序列相似性进行层次聚类，并与结构预测得到的表位分组对照。",
          "src": "assets/antibody-heavy-clustering.webp"
        },
        "lightClustering": {
          "title": "抗体轻链序列层次聚类",
          "width": 1164,
          "height": 1930,
          "alt": "抗体轻链序列层次聚类",
          "caption": "按轻链序列相似性进行层次聚类，补充候选抗体之间的序列比较。",
          "src": "assets/antibody-light-clustering.webp"
        },
        "egfrAnalysis": {
          "title": "EGFR 结构预测与分子动力学分析",
          "width": 1782,
          "height": 1352,
          "alt": "EGFR 结构预测与分子动力学分析",
          "caption": "结构叠合、PAE 及 100 ns 模拟中的相互作用能变化，结合构象与能量信息开展分析。",
          "srcRef": "image"
        },
        "xpaAnalysis": {
          "title": "XPA 结构与残基相互作用能分析",
          "width": 2349,
          "height": 2227,
          "alt": "XPA 结构与残基相互作用能分析",
          "caption": "比较 XPA DNA 结合区及 Kla 修饰相关结构，并查看残基层面的范德华与库仑相互作用能。",
          "src": "assets/xpa-analysis.webp"
        }
      },
      "videos": {
        "epitopeOverview": {
          "title": "十组预测表位的结构总览",
          "src": "assets/antibody-overview.mp4",
          "poster": "assets/antibody-overview-poster.webp",
          "width": 1280,
          "height": 580,
          "caption": "将 Epi01–Epi10 预测表位组的复合物并列展示，比较不同组的结构取向与空间分布。"
        },
        "egfrTrajectory": {
          "title": "EGFR 100 ns 分子动力学轨迹",
          "src": "assets/egfr-100ns.mp4",
          "poster": "assets/egfr-100ns-poster.webp",
          "width": 1280,
          "height": 720,
          "caption": "查看 EGFR 相关体系在 100 ns 模拟中的构象变化，与结构叠合及相互作用能分析结合解读。"
        }
      }
    }
  },
  biology: [
    {
      key: 'sle', number: '01', label: 'AUTOIMMUNITY', title: 'SLE 与免疫细胞状态',
      tags: ['自身免疫', 'B 细胞', '单细胞多组学'],
      question: '疾病状态下，免疫细胞的表达与表面分子组织发生了什么变化？',
      work: '联合分析单细胞转录组、表面蛋白组与蛋白邻近网络，研究 SLE 相关免疫细胞状态。',
      insight: '分别检查蛋白丰度与分子邻近关系的变化，将表面分子组织纳入细胞状态的解释。',
      detail: '将细胞身份、转录状态、表面蛋白丰度和分子邻近关系放在同一分析框架中，比较健康与疾病样本、不同 B 细胞亚群中的变化。',
      methods: '细胞亚群注释、多模态整合、差异表达与差异邻近网络分析。',
      detailSections: [
        {
          "id": "question",
          "title": "疾病背景与研究问题",
          "paragraphs": [
            "围绕 SLE 相关免疫细胞状态，比较健康与疾病样本以及不同 B 细胞亚群，关注表达状态、表面蛋白丰度与表面分子邻近关系是否共同变化。"
          ]
        },
        {
          "id": "workflow",
          "title": "将三层多组学证据放在同一背景中",
          "points": [
            [
              "细胞身份与状态",
              "开展细胞亚群注释、多模态整合和差异表达分析，建立比较背景。"
            ],
            [
              "表面蛋白丰度",
              "比较表面分子组成，结合转录状态核查细胞特征。"
            ],
            [
              "蛋白邻近网络",
              "分析差异邻近关系，将表面分子组织纳入免疫细胞状态解释。"
            ]
          ],
          "figureRef": "image"
        },
        {
          "id": "interpretation",
          "title": "分析判断与生物学解释",
          "paragraphs": [
            "区分蛋白数量变化与邻近关系变化，结合细胞身份、转录状态和疾病条件组织证据。对网络差异提出生物学解释时，保留各组学层面的证据来源，支持后续研究验证。"
          ]
        }
      ],
      image: 'assets/pi-seq-network.png', caption: 'SLE 研究中的表面蛋白邻近网络示例。'
    },
    {
      key: 'liver', number: '02', label: 'LIVER BIOLOGY', title: '肝脏衰老与炎症微环境',
      tags: ['肝脏单细胞', '衰老与炎症', '细胞通讯'],
      question: '衰老背景下，胆管细胞与免疫细胞之间的信号关系如何变化？',
      work: '开展肝脏单细胞转录组分析，结合通路变化与多方法通讯分析，研究胆管细胞和免疫微环境。',
      insight: '区分胆管细胞的免疫调节输出与接收的炎症输入，并用多种方法交叉检查候选通讯。',
      detail: '分析年轻与老年组肝脏细胞状态，围绕炎症输入、免疫调节输出及黏附与基质相关信号，组织胆管细胞与免疫细胞间的候选通讯证据。',
      methods: '单细胞转录组、差异表达与通路富集；结合 CellPhoneDB、CellChat、LIANA+、MultiNicheNet 与 scDiffCom 的候选配体–受体证据。',
      detailSections: [
        {
          "id": "question",
          "title": "从肝脏衰老走向炎症微环境",
          "paragraphs": [
            "比较年轻与老年组肝脏细胞状态，围绕胆管细胞与免疫细胞之间的候选信号关系，研究衰老背景下的炎症输入和免疫调节输出。"
          ]
        },
        {
          "id": "evidence",
          "title": "单细胞状态、通路与通讯证据",
          "points": [
            [
              "细胞状态与通路",
              "结合单细胞转录组、差异表达与通路富集，组织不同状态下的证据。"
            ],
            [
              "候选配体–受体关系",
              "结合 CellPhoneDB、CellChat、LIANA+、MultiNicheNet 与 scDiffCom 的分析，交叉检查候选通讯。"
            ],
            [
              "信号方向",
              "分别检查胆管细胞发出的免疫调节信号、接收的炎症信号，以及黏附和基质相关信号。"
            ]
          ],
          "figureRef": "image"
        },
        {
          "id": "interpretation",
          "title": "从候选通讯形成研究假设",
          "paragraphs": [
            "配体–受体分析用于提出候选通讯假设。解释时综合细胞状态、通路方向和不同方法的支持情况，并结合其他证据推进机制研究。"
          ]
        }
      ],
      image: 'assets/cell-communication.png', caption: '肝脏研究中的细胞通讯分析示例。',
      note: '配体–受体分析用于提出候选通讯假设，机制解释需要结合其他证据。'
    },
    {
      key: 'ipa', number: '03', label: 'METABOLISM & IMMUNITY', title: 'IPA 与 B 细胞发育',
      tags: ['代谢物与免疫', 'B 细胞分化', '转录调控网络'],
      question: 'IPA 处理如何影响 B 细胞的发育、分化与转录调控？',
      work: '分析处理组与对照组的单细胞时间序列，追踪 B 细胞状态、亚群组成与转录因子调控网络。',
      insight: '结合时间变化，分别考察亚群组成、细胞状态与调控网络，组织对分化过程的解释。',
      detail: '比较 D1、D2、D5 与 D8 的处理组和对照组，关注 B 细胞激活、浆母细胞与浆细胞等状态变化，并分析差异调控网络及其靶基因功能。',
      methods: '细胞状态注释、时间序列比较、亚群组成分析、差异 regulon 与靶基因富集分析。',
      detailSections: [
        {
          "id": "design",
          "title": "结合处理条件与发育时间理解变化",
          "paragraphs": [
            "比较 IPA 处理组与对照组在 D1、D2、D5、D8 的单细胞状态，围绕 B 细胞激活、浆母细胞和浆细胞等状态组织分析。",
            "把时间变化纳入解释，分别考察细胞亚群组成、细胞状态和分化相关转录调控，避免将不同层面的变化混为一体。"
          ],
          "figureRef": "image"
        },
        {
          "id": "regulation",
          "title": "转录因子调控网络与靶基因功能",
          "points": [
            [
              "亚群组成与状态",
              "对照不同时间与处理条件，检查 B 细胞亚群比例和状态变化。"
            ],
            [
              "差异 regulon",
              "分析调控网络随时间与处理条件的变化，组织候选转录因子证据。"
            ],
            [
              "靶基因功能",
              "结合靶基因富集与细胞状态解释调控变化，衔接发育和分化过程。"
            ]
          ],
          "figureRef": "secondaryImage"
        },
        {
          "id": "interpretation",
          "title": "把多条证据连成生物学解释",
          "paragraphs": [
            "围绕同一时间点的处理比较与跨时间的变化轨迹，综合亚群组成、状态标记、调控网络和靶基因功能，形成对 IPA 影响 B 细胞发育的研究假设。"
          ]
        }
      ],
      image: 'assets/ipa-timecourse.png', caption: 'IPA 研究中的处理组与对照组单细胞时间序列。',
      secondaryImage: 'assets/ipa-regulons.png', secondaryCaption: '转录因子调控网络随时间变化的分析。'
    }
  ],
  cases: {
    qc: {
      title: '识别被质控过滤的中性粒细胞', subtitle: '跨模态证据与质量控制',
      takeaway: '低转录本需要结合细胞类型解释：中性粒细胞的质控判断还需参考表面蛋白证据。',
      tags: ['异常诊断', '跨模态验证', '生物学解释'],
      steps: [
        ['发现异常', '捕获细胞偏少，部分细胞被常规转录组质控规则排除。'],
        ['交叉验证', '结合 CD66b 等表面蛋白信号、细胞类型特征与转录组指标，重新判断细胞身份。'],
        ['形成判断', '中性粒细胞的低转录本特征可能与通用质控阈值冲突，需要结合蛋白证据解释。'],
        ['推动研究', '建立中性粒细胞表面蛋白分析方案，支持课题后续研究。']
      ],
      image: 'assets/qc-protein.png', caption: '转录组与 CD66b 表面蛋白信号的联合检查。',
      note: '另一个样本中，高线粒体比例、低 UMI 与表面蛋白信号共同提示细胞受损及 RNA 泄漏或降解，支持调整细胞处理方案。'
    },
    identity: {
      title: 'HashTag 失败后恢复样本来源', subtitle: '基因型证据与样本溯源',
      takeaway: '利用转录本中的基因型信息，补足缺失的样本来源证据。',
      tags: ['基因型分型', '样本身份恢复', '临床信息核对'],
      summary: 'HashTag 建库失败后，利用转录本中的基因型信息重新区分样本来源。',
      steps: [
        ['发现异常', 'HashTag 建库失败，无法通过原定标签识别细胞来源。'],
        ['补充证据', '按转录本中的基因型信息对细胞分组，并结合临床信息核对样本来源。'],
        ['结果核对', '恢复的细胞身份与投入比例一致，为样本来源判断提供支持。'],
        ['推动研究', '恢复样本归属，保留原本可能直接作废的数据。']
      ]
    },
    labels: {
      title: '用性别基因复核异常样本标签', subtitle: '独立证据与标签核查',
      takeaway: '用独立的生物学证据核对实验标签，发现样本来源的不一致。',
      tags: ['样本标签核查', '独立证据', '数据可信度'],
      summary: '面对离群的疾病样本，用性别相关基因表达复核实验记录中的样本归属。',
      steps: [
        ['发现异常', '一个疾病样本明显离群，怀疑疾病与正常样本的标签发生混淆。'],
        ['独立核查', '对照性别相关基因表达与样本记录，检查实验标签是否一致。'],
        ['形成判断', '发现不支持原始样本标记的证据，并据此提出复核。'],
        ['推动研究', '识别错误标记，避免样本混淆影响疾病比较与后续解释。']
      ]
    }
  },
  awards: [
    {date: '2022', endDate: '2027', title: '复旦大学卓博学员及卓博奖学金', amount: '50,000 元/年，共 25 万元', note: '院系唯一', category: 'scholarship', featured: true},
    {date: '2026.08', title: 'DeeCamp 2026 年度总冠军', amount: '100,000 元 / 团队', note: '', category: 'scholarship'},
    {date: '2022.12', title: '复旦大学泛海学者及泛海奖学金', amount: '8,000 元 + 42,000 元访学资助', note: '全校 10 人', category: 'scholarship'},
    {date: '2022.12', title: '沈自尹院士医学奖学金', amount: '10,000 元', note: '本硕博 20 人', category: 'scholarship'},
    {date: '2022.11', title: '复旦大学金龙鱼冠名奖学金', amount: '10,000 元', note: '', category: 'scholarship'},
    {date: '2021.11', title: '复旦大学陈锦聪冠名奖学金', amount: '3,000 元', note: '', category: 'scholarship'},
    {date: '2023.04', title: '上海市优秀毕业生', note: '', category: 'distinction', featured: true},
    {date: '2022.12', title: '复旦大学“泛海学者”', note: '', category: 'distinction'},
    {date: '2022.10', title: '复旦大学优秀学生干部', note: '', category: 'distinction'},
    {date: '2022.05', title: '复旦大学优秀共青团员', note: '', category: 'distinction'},
    {date: '2021.12', title: '复旦大学药学院学生会优秀副部长', note: '', category: 'distinction'},
    {dates: ['2020.10', '2023.10'], title: '复旦大学优秀学生', note: '', category: 'distinction'},
    {date: '2020.05', title: '复旦大学学生会优秀干事', note: '', category: 'distinction'}
  ],
  publications: [
    {
      year: '2025',
      title: 'Mesenchymal stem cell-derived exosomes as cell-free therapeutics: mechanistic insights and engineering strategies for liver disease treatment',
      authors: ['Shihang Yu', 'Defu Kong', 'Beike Lu', 'Yixiao Pan', 'Zhaokai Zeng', 'Yuan Fu', 'Zhicong Zhao', 'Kang He', 'Ruqi Tang', 'Qiang Xia'],
      journal: 'Stem Cell Research & Therapy, 16(1), 652',
      pmid: '41261428',
      doi: '10.1186/s13287-025-04747-y'
    },
    {
      year: '2023',
      title: 'A collagen-binding SIRPαFc fusion protein for targeted cancer immunotherapy',
      authors: ['Jiayang Liu', 'Tongyang Xu', 'Danjie Pan', 'Jiajun Fan', 'Yuan Fu', 'Xiting Huang', 'Weili Zhao', 'Xiaochun Dong', 'Shaohui Zhang', 'Kudelaidi Kuerban', 'Xuan Huang', 'Songna Wang', 'Huaning Chen', 'Yunpeng He', 'Yi Zhun Zhu', 'Congjun Wang', 'Li Ye'],
      journal: 'International Immunopharmacology, 124(Pt B), 110951',
      pmid: '37722258',
      doi: '10.1016/j.intimp.2023.110951'
    },
    {
      year: '2022',
      title: 'Discoidin domain receptor 1 is a potential target correlated with tumor invasion and immune infiltration in gastric cancer',
      authors: ['Songna Wang', 'Yuan Fu', 'Kudelaidi Kuerban', 'Jiayang Liu', 'Xuan Huang', 'Danjie Pan', 'Huaning Chen', 'Yizhun Zhu', 'Li Ye'],
      journal: 'Frontiers in Immunology, 13, 933165',
      pmid: '35935941',
      doi: '10.3389/fimmu.2022.933165'
    }
  ]
};
