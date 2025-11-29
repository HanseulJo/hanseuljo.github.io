---
title: "Fair Streaming Principal Component Analysis: Statistical and Algorithmic Viewpoint"
collection: publications
permalink: /publication/fair-streaming-pca
date: 2023-09-22
toc: true
toc_sticky: true
authors:
    - JL*
    - me*
    - SY
    - CY
venue: <a href="https://neurips.cc/Conferences/2023"><b>NeurIPS 2023</b></a>
award: 
paperurl: https://openreview.net/forum?id=TW3ipYdDQG
arxiv: https://arxiv.org/abs/2310.18593
pdf: https://openreview.net/pdf?id=TW3ipYdDQG
code: HanseulJo/fair-streaming-pca
categories: 
    - NeurIPS
tags:
    - Fairness
    - Streaming
    - Principal Component Analysis (PCA)
    - Unsupervised Learnability
---
<!-- markdownlint-disable MD033 -->

## Main Figures

![fair_streaming_pca](/assets/img/fair-streaming-pca/main_fig_2.png)

## Poster
  
![fair_streaing_pca_poster](/assets/img/fair-streaming-pca/3_neurips_poster_fairstreamingpca.png)

## Abstract

Fair Principal Component Analysis (PCA) is a problem setting where we aim to perform PCA while making the resulting representation fair in that the projected distributions, conditional on the sensitive attributes, match one another.
However, existing approaches to fair PCA have two main problems: theoretically, there has been no statistical foundation of fair PCA in terms of learnability; practically, limited memory prevents us from using existing approaches, as they explicitly rely on full access to the entire data.
On the theoretical side, we rigorously formulate fair PCA using a new notion called probably approximately fair and optimal (PAFO) learnability.
On the practical side, motivated by recent advances in streaming algorithms for addressing memory limitation, we propose a new setting called *fair streaming PCA* along with a memory-efficient algorithm, *fair noisy power method* (FNPM).
We then provide its statistical guarantee in terms of PAFO-learnability, which is the first of its kind in fair PCA literature.
We verify our algorithm in the full-resolution, colored CelebA dataset; while the existing approaches are inapplicable due to memory limitations, by turning it into a streaming setting, we show that our algorithm performs fair PCA efficiently and effectively.

## Keywords

Fairness, Streaming PCA, Unsupervised Learnability

## Slides

<iframe src="https://www.slideshare.net/slideshow/embed_code/key/dvzoPGtBRk00d4" width="960" height="540" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> </div>

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
