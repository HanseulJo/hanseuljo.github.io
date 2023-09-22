---
title: "Enhancing Generalization and Plasticity for Sample Efficient Reinforcement Learning"
collection: publications
permalink: /publication/generalization-and-plasticity-in-rl
date: 2023-09-22
authors:
    - Hojoon Lee*
    - <b>Hanseul Cho</b>*
    - Hyunseung Kim*
    - Daehoon Gwak
    - Joonkee Kim
    - JaegulChoo
    - SY
    - CY
venue: <b>NeurIPS 2023</b>
award: 
paperurl: https://arxiv.org/abs/2306.10711
categories: 
    - NeurIPS
    - KAIA
tags:
    - Reinforcement Learning
    - Plasticity
    - Sharpness-aware Minimization
    - Reset Mechanism
---

## Abstract

In Reinforcement Learning (RL), enhancing sample efficiency is crucial, particularly in scenarios when data acquisition is costly and risky. In principle, off-policy RL algorithms can improve sample efficiency by allowing multiple updates per environment interaction. However, these multiple updates often lead to overfitting, which decreases the network's ability to adapt to new data. We conduct an empirical analysis of this challenge and find that generalizability and plasticity constitute different roles in improving the model's adaptability. In response, we propose a combined usage of Sharpness-Aware Minimization (SAM) and a reset mechanism. SAM seeks wide, smooth minima, improving generalization, while the reset mechanism, through periodic reinitialization of the last few layers, consistently injects plasticity into the model. Through extensive empirical studies, we demonstrate that this combined usage improves sample efficiency and computational cost on the Atari-100k and DeepMind Control Suite benchmarks.

## Keywords

Reinforcement Learning, Plasticity, Sharpness-aware Minimization, Reset mechanism
