---
title: "Position Coupling: Leveraging Task Structure for Improved Length Generalization of Transformers"
collection: publications
permalink: /publication/Position-Coupling
date: 2024-05-31
authors:
    - <b>Hanseul Cho</b>*
    - Jaeyoung Cha*
    - <a href="https://scholar.google.com/citations?user=MDfW21AAAAAJ&hl=en">Pranjal Awasthi</a>
    - <a href="https://bsrinadh.github.io">Srinadh Bhojanapalli</a>
    - <a href="https://cs.nyu.edu/~anupamg/">Anupam Gupta</a>
    - CY
venue: ArXiv
award: 
paperurl: https://arxiv.org/abs/2402.10475
categories: 
    - Arxiv
tags:
    - Transformers
    - Length Generalization
    - Position Coupling
    - Positional Encoding
    - Out-of-distribution Generalization
    - Arithmetic Tasks
    - Algorithmic Tasks
---

## Abstract

Even for simple arithmetic tasks like integer addition, it is challenging for Transformers to generalize to longer sequences than those encountered during training. To tackle this problem, we propose position coupling, a simple yet effective method that directly embeds the structure of the tasks into the positional encoding of a (decoder-only) Transformer. Taking a departure from the vanilla absolute position mechanism assigning unique position IDs to each of the tokens, we assign the same position IDs to two or more "relevant" tokens; for integer addition tasks, we regard digits of the same significance as in the same position. On the empirical side, we show that with the proposed position coupling, a small (1-layer) Transformer trained on 1 to 30-digit additions can generalize up to 200-digit additions (6.67x of the trained length). On the theoretical side, we prove that a 1-layer Transformer with coupled positions can solve the addition task involving exponentially many digits, whereas any 1-layer Transformer without positional information cannot entirely solve it. We also demonstrate that position coupling can be applied to other algorithmic tasks such as addition with multiple summands, Nx2 multiplication, copy/reverse, and a two-dimensional task. Our code is available at [github.com/HanseulJo/position-coupling](https://github.com/HanseulJo/position-coupling).
