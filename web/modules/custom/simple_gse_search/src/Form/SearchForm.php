<?php

namespace Drupal\simple_gse_search\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class SearchForm extends FormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'simple_gse_search_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
	  $form_title = isset($_GET['s']) && $_GET['s'] != "" ? 'Search for '.$_GET['s'] : 'Search';
	  //echo($form_title);
	  $form['s'] = [
      '#type' => 'search',
      '#title' => t($form_title),
      // NOTE: setting default value in preprocess form to only fill it in on search page.
      //'#default_value' => isset($_GET['s']) ? $_GET['s'] : '',
      '#attributes' => ['placeholder' => 'Search site...', 'class' => ['hia-search-input']],
      '#theme_wrappers' => [],
      '#size' => NULL,
    ];
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => 'Search',
      '#name' => '',
      '#attributes' => ['class' => ['hia-search-submit']],
    ];

    $form['#attributes'] = ['class' => ['hia-search-form']];
    $form['#action'] = '/search';
    $form['#method'] = 'get';

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Intentionally leave this empty.
  }

}
