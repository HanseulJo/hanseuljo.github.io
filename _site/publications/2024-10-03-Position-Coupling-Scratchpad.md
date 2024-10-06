<!-- ---
title: "Arithmetic Transformers Can Length-Generalize in Both Operand Length and Count"
collection: publications
permalink: /publication/Position-Coupling-Scratchpad
date: 2024-10-03
authors:
    - <b>Hanseul Cho</b>*
    - Jaeyoung Cha*
    - <a href="https://bsrinadh.github.io">Srinadh Bhojanapalli</a>
    - CY
venue: Under Review
award: 
paperurl: 
categories: 
    -
tags:
    - Transformers
    - Length Generalization
    - Scratchpad
    - Position Coupling
    - Positional Encoding
    - Out-of-distribution Generalization
    - Arithmetic Tasks
    - Algorithmic Tasks
---


## Abstract

Transformer-based language models often struggle with length generalization, meaning they fail to generalize to sequences longer than those encountered during training. While arithmetic tasks are commonly used to study length generalization, certain tasks are considered notoriously difficult, e.g., multi-operand addition (which requires generalization over both the number of operands and their lengths) and multiplication (which requires generalization over both operand lengths). In this paper, we achieve approximately 2--3$\times$ length generalization on both tasks, which is the first such achievement in arithmetic Transformers. To this end, we design task-specific scratchpads enabling the model to focus on a fixed number of tokens per each next-token prediction step, and then apply multi-level versions of Position Coupling ([Cho et al., 2024](https://arxiv.org/abs/2405.20671); [McLeish et al., 2024](https://arxiv.org/abs/2405.17399)) to offer Transformers information about the right position to attend to. On the theory side, we prove that a 1-layer Transformer using our method can solve multi-operand addition, up to operand length and operand count that are exponential in embedding dimension. -->
