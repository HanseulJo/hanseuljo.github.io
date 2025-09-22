---
title: '[Coursework Report] An Overview on Optimal Transport and its Application to Model Fusion'
excerpt: 'Final report for the coursework "Optimal Transport + Gradient Flow"'
collections: posts
date: 2023-12-16
permalink: /posts/optimal-transport-model-fusion/
use_math: true
toc:      true
toc_sticky: true
categories:
    - coursework
    - report
tags:
    - optimal transport
    - duality
    - entropic regularization
    - model fusion
---

<!-- markdownlint-disable MD033 -->
<object data="/files/courseworks/Optimal_Transport_Final_Essay.pdf" width="960" height="1000" type='application/pdf'></object>
For mobile: [**View PDF**](/files/courseworks/Optimal_Transport_Final_Essay.pdf)

## Abstract

In this report, we briefly overview the theory of optimal transport (OT), entropically regularized OT, and the Sinkhorn algorithm, and their application to the deep learning model fusion technique. For the theory of OT, we delve into the derivation of the dual OT problem and the proof of the no-duality-gap result (i.e., strong duality). Through the lens of duality, we can analyze the entropic OT and its dual problem, and derive the Sinkhorn algorithm. We then provide a short survey of convergence results of the Sinkhorn algorithm and its variants. Lastly, we turn our attention to model fusion, which combines the power of several differently trained deep learning models (i.e., neural networks) into a single powerful model. We illustrate OTfusion [Singh and Jaggi, 2020], a method of aggregating several neural networks via optimal transport, and we offer a short discussion of further applications of it.

## Main References

* Sidak Pal Singh and Martin Jaggi. [Model Fusion via Optimal Transport.](https://arxiv.org/abs/1910.05653) NeurIPS 2020.
