---
title: "Error-Subspace Calibration for Multi-Task Model Merging"
collection: publications
permalink: /publication/error-subspace-calibration
date: 2026-10-24
toc: true
toc_sticky: true
authors:
    - <a href="https://cyseul.github.io/">Yeseul Cho</a>
    - me
    - CY
venue: ArXiv preprint
award: 
paperurl:
arxiv: https://arxiv.org/abs/2610.33483
pdf: https://arxiv.org/pdf/2610.33483
code: cyseul/ESCal
x: 
linkedin:
doi: "10.48550/arXiv.2610.33483"
scholar: "MXK_kJrjxJIC"
categories: 
    - ArXiv
tags:
    - Multi-Task Model Merging
    - Error-Subspace Calibration
    - ESCal
---
<!-- markdownlint-disable MD033 -->

## Main Figure

<object data="/assets/img/escal/escal-figure1.pdf" width="100%" height="40%" type='application/pdf'></object>

![escal_framework.png](../assets/img/escal/escal_framework.png)

## Abstract

Model merging combines task-specific expert models into a single model without joint training on their original datasets, but often incurs a performance gap relative to the individual experts. Post-merging calibration can reduce this gap through task-specific representation alignment, but the alignment objective alone does not specify which feature directions to correct. We propose **E**rror-**S**ubspace **Cal**ibration (ESCal), a post-merging calibration framework that identifies low-dimensional error subspaces from weight differences between expert and merged models. At each intermediate block boundary, a Bridge module projects the merged representation onto the next block’s input-projection error subspace and maps these coordinates to an additive correction in the current block’s output-projection error subspace. The subspace bases remain fixed, so calibration learns only these linear maps, yielding a parameter-efficient mechanism for feature correction. We find that ESCal brings the merged model closer to the experts in both representations and predictions, indicating more faithful recovery of task-specific behavior. Experiments on vision and natural language understanding benchmarks show that ESCal improves merged-model performance across diverse architectures and merging methods using a small calibration set for each task.

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
