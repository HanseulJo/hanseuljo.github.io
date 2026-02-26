---
title: "Arithmetic Transformers Can Length-Generalize in Both Operand Length and Count"
collection: publications
permalink: /publication/Position-Coupling-Scratchpad
date: 2025-01-23
toc: true
toc_sticky: true
authors:
    - me*
    - JC*
    - SrinadhB
    - CY
venue: <a href="https://iclr.cc/Conferences/2025"><b>ICLR 2025</b></a>
award: 
paperurl: https://openreview.net/forum?id=eIgGesYKLG
arxiv: https://arxiv.org/abs/2410.15787
pdf: https://openreview.net/pdf?id=eIgGesYKLG
code: HanseulJo/position-coupling
x: https://x.com/hanseuljo/status/1896208153131528220
linkedin: https://www.linkedin.com/posts/hanseul-cho_recent-llms-like-o3-deepseek-r1-struggle-activity-7302114846903320576-P4HG
doi: "10.48550/arXiv.2410.15787"
scholar: "W7OEmFMy1HYC"
categories: 
    - ICLR
    - Arxiv
tags:
    - Transformers
    - Length Generalization
    - Position Coupling
    - Scratchpad
    - Positional Encoding
    - Out-of-distribution Generalization
    - Arithmetic Tasks
---
<!-- markdownlint-disable MD033 -->

<br>
📌 TL;DR: [**Position Coupling**](/publication/Position-Coupling) + Scratchpad: Unlocks length-generalizability of Transformers on two more complex arithmetic tasks:
* **Multiple-Integer Addition**: requiring gen. in (1) **# summands** & (2) len(summands)
* **Integer Multiplication**: requiring gen. in (1) len(multiplier) & (2) len(multiplicand)

💡 IDEA: reduction of multiplication into multi-op addition ⬇️
<p style="text-align: center">
($M$-digit)$\times$($N$-digit) $\simeq$ $\sum_{i=1}^{N}$ $\big($ ($M$-digit)$\times$($1$-digit) $\big)_i$
</p>
...and "($M$-digit)$\times$($1$-digit)" can be effectively solved with Position Coupling!

## Main Figures

![Position_Coupling_Scratchpad](/assets/img/position-coupling-scratchpad/Poco_FIRE_NoPE_multiadd.png)
  
## Abstract

Transformers often struggle with *length generalization*, meaning they fail to generalize to sequences longer than those encountered during training. While arithmetic tasks are commonly used to study length generalization, certain tasks are considered notoriously difficult, e.g., multi-operand addition (requiring generalization over both the number of operands and their lengths) and multiplication (requiring generalization over both operand lengths). In this work, we achieve approximately 2–3× length generalization on both tasks, which is the first such achievement in arithmetic Transformers. We design task-specific scratchpads enabling the model to focus on a fixed number of tokens per each next-token prediction step, and apply multi-level versions of *Position Coupling* ([Cho et al., 2024](/publication/Position-Coupling.html); [McLeish et al., 2024](https://arxiv.org/abs/2405.17399)) to let Transformers know the right position to attend to. On the theory side, we prove that a 1-layer Transformer using our method can solve multi-operand addition, up to operand length and operand count that are exponential in embedding dimension. All our experiments are reproducible based on the codebase in [github.com/HanseulJo/position-coupling](https://github.com/HanseulJo/position-coupling).

## Poster

![Position_Coupling5](/assets/img/position-coupling-scratchpad/Poster_PoCo_ICLR2025.png)

## Slides

<iframe src="https://iclr.cc/media/iclr-2025/Slides/28933.pdf" width="960" height="540" style="max-width: 100%;"> </iframe>
For mobile: [**View PDF**](https://iclr.cc/media/iclr-2025/Slides/28933.pdf)

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
