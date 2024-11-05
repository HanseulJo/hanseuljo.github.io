var store = [{
        "title": "[논문읽기] Are Transformers universal approximators of sequence-to-sequence functions?",
        "excerpt":"Abstract Keywords &amp; Definitions 1. Sequence-to-sequence Function 2. Permutation Equivariant 3. Universal Approximation 4. Contextual Mapping Main Text 1. Universal Approximator임을 보이기 힘든 이유 2. 논문에서 본 Transformer 2.1. 기존 Transformer 논문과의 공통점 2.2. 기존 Transformer 논문과의 차이점 2.3. Positional encoding 3. 주요 결과 (2가지) 4. 어떻게 증명하나? 5. 몇...","categories": ["paper review"],
        "tags": ["transformer","sequence-to-sequence","approximation","expressive power","deep learning theory"],
        "url": "/posts/are-transformer-universal-approximators-of-sequence-to-sequence-functions/",
        "teaser": null
      },{
        "title": "SGDA with shuffling: faster convergence for nonconvex-PŁ minimax optimization",
        "excerpt":"Abstract Stochastic gradient descent-ascent (SGDA) is one of the main workhorses for solving finite-sum minimax optimization problems. Most practical implementations of SGDA randomly reshuffle components and sequentially use them (i.e., without-replacement sampling); however, there are few theoretical results on this approach for minimax algorithms, especially outside the easier-to-analyze (strongly-)monotone setups....","categories": ["ICLR","KAIA"],
        "tags": ["minimax optimization","SGDA","without-replacement sampling","shuffling-based"],
        "url": "/publication/sgda-with-shuffling",
        "teaser": null
      },{
        "title": "PLASTIC: Improving Input and Label Plasticity for Sample Efficient Reinforcement Learning",
        "excerpt":"Abstract In Reinforcement Learning (RL), enhancing sample efficiency is crucial, particularly in scenarios when data acquisition is costly and risky. In principle, off-policy RL algorithms can improve sample efficiency by allowing multiple updates per environment interaction. However, these multiple updates often lead the model to overfit to earlier interactions, which...","categories": ["NeurIPS","KAIA"],
        "tags": ["Reinforcement Learning","Plasticity","Sharpness-aware Minimization","Reset Mechanism"],
        "url": "/publication/PLASTIC",
        "teaser": null
      },{
        "title": "Fair Streaming Principal Component Analysis: Statistical and Algorithmic Viewpoint",
        "excerpt":"Abstract Fair Principal Component Analysis (PCA) is a problem setting where we aim to perform PCA while making the resulting representation fair in that the projected distributions, conditional on the sensitive attributes, match one another. However, existing approaches to fair PCA have two main problems: theoretically, there has been no...","categories": ["NeurIPS","KAIA"],
        "tags": ["Fairness","Streaming","Principal Component Analysis (PCA)","Unsupervised Learnability"],
        "url": "/publication/fair-streaming-pca",
        "teaser": null
      },{
        "title": "Fundamental Benefit of Alternating Updates in Minimax Optimization",
        "excerpt":"Abstract The Gradient Descent-Ascent (GDA) algorithm, designed to solve minimax optimization problems, takes the descent and ascent steps either simultaneously (Sim-GDA) or alternately (Alt-GDA). While Alt-GDA is commonly observed to converge faster, the performance gap between the two is not yet well understood theoretically, especially in terms of global convergence...","categories": ["Arxiv","KAIA","ICLR Workshop","ICML"],
        "tags": ["minimax optimization","Gradient Descent-Ascent (GDA)","Alex-GDA"],
        "url": "/publication/Alex-GDA",
        "teaser": null
      },{
        "title": "DASH: Warm-Starting Neural Network Training in Stationary Settings without Loss of Plasticity",
        "excerpt":"Abstract Warm-starting neural network training by initializing networks with previously learned weights is appealing, as practical neural networks are often deployed under a continuous influx of new data. However, it often leads to loss of plasticity, where the network loses its ability to learn new information, resulting in worse generalization...","categories": ["NeurIPS","ICML Workshop"],
        "tags": ["Loss of Plasticity","Warm-Starting","Incremental Learning","Generalization","Direction-Aware SHrinking","DASH"],
        "url": "/publication/DASH",
        "teaser": null
      },{
        "title": "Position Coupling: Improving Length Generalization of Arithmetic Transformers Using Task Structure",
        "excerpt":"Abstract Even for simple arithmetic tasks like integer addition, it is challenging for Transformers to generalize to longer sequences than those encountered during training. To tackle this problem, we propose position coupling, a simple yet effective method that directly embeds the structure of the tasks into the positional encoding of...","categories": ["Arxiv","NeurIPS","ICML Workshop"],
        "tags": ["Transformers","Length Generalization","Position Coupling","Positional Encoding","Out-of-distribution Generalization","Arithmetic Tasks","Algorithmic Tasks"],
        "url": "/publication/Position-Coupling",
        "teaser": null
      },{
        "title": "Arithmetic Transformers Can Length-Generalize in Both Operand Length and Count",
        "excerpt":"Abstract Transformers often struggle with length generalization, meaning they fail to generalize to sequences longer than those encountered during training. While arithmetic tasks are commonly used to study length generalization, certain tasks are considered notoriously difficult, e.g., multi-operand addition (requiring generalization over both the number of operands and their lengths)...","categories": ["Arxiv"],
        "tags": ["Transformers","Length Generalization","Position Coupling","Scratchpad","Positional Encoding","Out-of-distribution Generalization","Arithmetic Tasks"],
        "url": "/publication/Position-Coupling-Scratchpad",
        "teaser": null
      },]
