---
title: "Data-Constrained Language Model Pretraining: Improved Regularization and Scaling Laws"
collection: publications
permalink: /publication/data-constrained
date: 2026-07-10
toc: true
toc_sticky: true
authors:
    - <a href="https://zhiweixx.github.io/">Zhiwei Xu</a>
    - <a href="https://sites.google.com/umich.edu/shihaowu/home">Shihao Wu</a>
    - me
    - <a href="https://weihu.me/">Wei Hu</a>*
    - <a href="https://scholar.google.com/citations?user=gFLW9qcAAAAJ&hl=en">Yixin Wang</a>*
venue: <a href="https://sites.google.com/view/hidimlearning/home"><b>HiLD @ ICML2026</b></a>
award: 
paperurl: https://openreview.net/forum?id=W5k9IVRdp4
arxiv: https://arxiv.org/abs/2606.06888
pdf: https://arxiv.org/pdf/2606.06888
code: yixinw-lab/dc_pretrain
x: 
linkedin:
doi: 10.48550/arXiv.2606.06888
scholar: "5nxA0vEk-isC"
categories: 
    - ArXiv
    - ICML Workshop
    - HiLD
tags:
    - Data-Constrained Pretraining
    - Scaling Law
    - Regularization
---
<!-- markdownlint-disable MD033 -->

## Abstract

Classical scaling laws for language model pretraining balance model size against training dataset size under a fixed compute budget, assuming abundant data and a single pass over the corpus. As training compute grows faster than the supply of natural language data, pretraining is likely to enter a data-constrained, compute-rich regime where models train for multiple epochs over a finite dataset. We study data-constrained pretraining along two axes, regularization and scaling. For regularization, we study masked-input regularization (MIR), an auxiliary next-token prediction loss on randomly masked inputs. MIR tests whether the random masking central to diffusion language models can benefit autoregressive pretraining without architectural changes or inference overhead. Across 72M to 1.4B parameter models, we find that MIR added on top of strong weight decay improves validation loss over autoregressive strong-weight-decay-only models, with downstream gains at 1.4B. For scaling, we propose SoftQ, a scaling law that couples model size and data size to capture their interaction under repeated data. Classical alternatives such as the Chinchilla law use an additive form that decouples these terms, making them misspecified in the data-constrained regime. We find that SoftQ fits data-constrained experiments substantially better than these alternatives, and estimates MIR's gains as equivalent to roughly 1.3 times as much unique training data.

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
