---
title: "Position Coupling: Improving Length Generalization of Arithmetic Transformers Using Task Structure"
collection: publications
permalink: /publication/Position-Coupling
date: 2024-09-26
authors:
    - <b>Hanseul Cho</b>*
    - Jaeyoung Cha*
    - <a href="https://scholar.google.com/citations?user=MDfW21AAAAAJ&hl=en">Pranjal Awasthi</a>
    - <a href="https://bsrinadh.github.io">Srinadh Bhojanapalli</a>
    - <a href="https://cs.nyu.edu/~anupamg/">Anupam Gupta</a>
    - CY
venue: <b>NeurIPS 2024</b> (Short version at <b>ICML 2024 Workshop</b> on Long-Context Foundation Models (LCFM))
award: 
paperurl: https://arxiv.org/abs/2405.20671
categories: 
    - Arxiv
    - NeurIPS
    - ICML Workshop
tags:
    - Transformers
    - Length Generalization
    - Position Coupling
    - Positional Encoding
    - Out-of-distribution Generalization
    - Arithmetic Tasks
    - Algorithmic Tasks
---


![Position_Coupling1](../assets/img/position-coupling/Addition_EM_Method_Comparison.png)
  
![Position_Coupling2](../assets/img/position-coupling/Addition_EM_median_Large.png)
  
![Position_Coupling3](../assets/img/position-coupling/PositionCouplingForAddition.png)

## Abstract

Even for simple arithmetic tasks like integer addition, it is challenging for Transformers to generalize to longer sequences than those encountered during training. To tackle this problem, we propose position coupling, a simple yet effective method that directly embeds the structure of the tasks into the positional encoding of a (decoder-only) Transformer. Taking a departure from the vanilla absolute position mechanism assigning unique position IDs to each of the tokens, we assign the same position IDs to two or more "relevant" tokens; for integer addition tasks, we regard digits of the same significance as in the same position. On the empirical side, we show that with the proposed position coupling, our models trained on 1 to 30-digit additions can generalize up to 200-digit additions (6.67x of the trained length). On the theoretical side, we prove that a 1-layer Transformer with coupled positions can solve the addition task involving exponentially many digits, whereas any 1-layer Transformer without positional information cannot entirely solve it. We also demonstrate that position coupling can be applied to other algorithmic tasks such as Nx2 multiplication and a two-dimensional task. Our code is available at [github.com/HanseulJo/position-coupling](https://github.com/HanseulJo/position-coupling).
