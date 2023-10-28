---
title: "Fair Streaming Principal Component Analysis: Statistical and Algorithmic Viewpoint"
collection: publications
permalink: /publication/fair-streaming-pca
date: 2023-09-22
authors:
    - Junghyun Lee*
    - <b>Hanseul Cho</b>*
    - SY
    - CY
venue: <b>NeurIPS 2023</b>
award: 
paperurl: 
categories: 
    - NeurIPS
    - KAIA
tags:
    - Fairness
    - Streaming PCA
    - Unsupervised Learnability
---

## Abstract

Fair Principal Component Analysis (PCA) is a problem setting where we aim to perform PCA while making the resulting representation fair in that the projected distributions, conditional on the sensitive attributes, match one another.
However, existing approaches to fair PCA have two main problems: theoretically, there has been no statistical foundation of fair PCA in terms of learnability; practically, limited memory prevents us from using existing approaches, as they explicitly rely on full access to the entire data.
On the theoretical side, we rigorously formulate fair PCA using a new notion called probably approximately fair and optimal (PAFO) learnability.
On the practical side, motivated by recent advances in streaming algorithms for addressing memory limitation, we propose a new setting called *fair streaming PCA* along with a memory-efficient algorithm, *fair noisy power method* (FNPM).
We then provide its statistical guarantee in terms of PAFO-learnability, which is the first of its kind in fair PCA literature.
We verify our algorithm in the full-resolution, colored CelebA dataset; while the existing approaches are inapplicable due to memory limitations, by turning it into a streaming setting, we show that our algorithm performs fair PCA efficiently and effectively.

## Keywords

Fairness, Streaming PCA, Unsupervised Learnability
