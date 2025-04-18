---
title: "Convergence and Implicit Bias of Gradient Descent on Continual Linear Classification"
collection: publications
permalink: /publication/Continual-Linear-Classfication-GD
date: 2025-01-23
toc: true
toc_sticky: true
authors:
    - Hyunji Jung*
    - me*
    - CY
venue: <a href="https://iclr.cc/Conferences/2025"><b>ICLR 2025</b></a>
award: <b>Best Paper Award</b> at the 11th Joint Conference of Korean Artificial Intelligence Association (<a href="https://aiassociation.kr/Conference/ConferenceView.asp?AC=0&CODE=CC20240901&CpPage=282#CONF">JKAIA 2024</a>)
paperurl: https://openreview.net/forum?id=DTqx3iqjkz
arxiv: https://arxiv.org/abs/2504.12712
pdf: https://openreview.net/pdf?id=DTqx3iqjkz
code:
categories: 
    - ICLR
    - Arxiv
    - KAIA
tags:
    - Continual Learning
    - Sequential Learning
    - Gradient Descent
    - Linear Classification
    - Convergence
    - Implicit Bias
---


## Abstract

We study continual learning on multiple linear classification tasks by sequentially running gradient descent (GD) for a fixed budget of iterations per each given task. When all tasks are jointly linearly separable and are presented in a cyclic/random order, we show the directional convergence of the trained linear classifier to the **joint (offline) max-margin** solution. This is surprising because GD training on a single task is implicitly biased towards the individual max-margin solution for the task, and the direction of the joint max-margin solution can be largely different from these individual solutions. Additionally, when tasks are given in a cyclic order, we present a non-asymptotic analysis on **cycle-averaged forgetting**, revealing that (1) alignment between tasks is indeed closely tied to catastrophic forgetting and backward knowledge transfer and (2) the amount of forgetting vanishes to zero as the cycle repeats. Lastly, we analyze the case where the tasks are no longer jointly separable and show that the model trained in a cyclic order converges to the unique minimum of the joint loss function.

## Read Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
