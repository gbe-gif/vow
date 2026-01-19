import React from 'react';

export interface NavItem {
  label: string;
  id: string;
}

export interface CharacterTrait {
  keyword: string;
  description: string;
}

export interface LoreItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}